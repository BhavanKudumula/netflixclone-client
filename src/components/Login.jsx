import React, { useState } from 'react';
import Header from './Header';
import { emailValidation, passwordValidation } from '../utils/inputValidation';
import axios from 'axios';
import { API_END_POINT } from "../constants.js";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setIsLoading, setUser } from '../redux/userSlice.js';

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading)

  //TODO Need to check the validations part as it is not working as expected.
  const handleEmailBlur  = () => {
    const emailMessage = emailValidation(email);
    setEmailMessage(emailMessage);
      
  }

  const handlePasswordBlur = () => {
    const passwordMessage = passwordValidation(password)
    setPasswordMessage(passwordMessage);
  }

  const onSubmitHandler = async (e) => {
      e.preventDefault();
      dispatch(setIsLoading(true))     
      if (isSignInForm) {
        try {
          //Login 
          const userSignInData = {email, password}
          const res = await axios.post(`${API_END_POINT}/login`, userSignInData, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
          
          if(res.data.success) {
            toast.success(res.data.message)
          }
          dispatch(setUser(res.data.user));
          navigate("/browse")
        } catch (error) {
          toast.error(error.res.data.message)
          console.log(error)
        } finally {
          dispatch(setIsLoading(false)) 
        }

      } else {
        try {
          //Register
          const userRegisterData = {userName, email, password}
          const res = await axios.post(`${API_END_POINT}/register`, userRegisterData, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
          if(res.data.success) {
            toast.success(res.data.message)
          } 

        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error)
        } finally {
          dispatch(setIsLoading(false))
        }
      }

      const emailMessage = emailValidation(email);
      const passwordMessage = passwordValidation(password)
      setEmailMessage(emailMessage);
      setPasswordMessage(passwordMessage);
      setUserName("");
      setEmail("");
      setPassword(""); 

  }

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }


  return (
    <div>
      <Header />
      <div>
        <img
        className='absolute w-full bg-gradient-to-t from-black lg:bg-opacity-70' 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='banner' />
      </div>
      <div className='relative flex justify-center py-20'>
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
          <h1 className='text-white text-4xl mb-8 font-semibold'>
            
            {isSignInForm?  "Sign In" : "Sign Up"}
          </h1>
          <div>
            <form className='flex flex-col gap-1' onSubmit={onSubmitHandler}>
              {!isSignInForm && 
              <input 
                className='rounded-sm p-3 my-2 bg-transparent border border-gray-400 text-white'
                type='text' 
                placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              }
              <input 
                className='rounded-sm p-3 my-2 bg-transparent border border- text-white'
                type='text' 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
              />
              <p className='text-red-500 text-sm font-normal'>{emailMessage}</p>
              <input 
                className='rounded-sm p-3 my-2 bg-transparent border border-red text-white'
                type='password' 
                placeholder='Password' 
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                onBlur={handlePasswordBlur}
              />
              {/* <p className='text-red-800 text-xl font-normal'>{errorMessage}</p> */}
              <p className='text-red-500 text-sm font-normal'>{passwordMessage}</p>
              <button 
              type='submit'
              className='bg-red-800 text-white px-4 py-2 rounded-sm cursor-pointer'
              > 
                {isLoading? "Loading..." : (isSignInForm? "Sing In" : "Sign Up")}
                
              </button>
              
            </form> 
            {isSignInForm? ( 
              <p className='text-gray-500 py-2' onClick={toogleSignInForm}>
                 New to Netflix? <span className=' text-white font-bold cursor-pointer'>Sign Up now</span>.
              </p>
            ) : (
              <p className='text-gray-500 py-2' onClick={toogleSignInForm}>
                Already Registerd? <span className=' text-white font-bold cursor-pointer'>Sign In now</span>.
              </p>
            )
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login