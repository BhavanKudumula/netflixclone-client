import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector, useDispatch} from 'react-redux'
import { API_END_POINT } from '../constants';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToogle } from '../redux/movieSlice';

function Header() {
  const user = useSelector((store) => store.app.user)
  const toogle = useSelector((store) => store.movie.toogle)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${API_END_POINT}/logout`, {}, {
        headers: {
          'content-Type': 'application/json'
        },
        withCredentials: true
      })

      if(res.data.success) {
        toast.success(res.data.message)
      }
      
      dispatch(setUser(null));
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const handleToogle = () => {
    dispatch(setToogle())
  }

  return (
    <div className='flex w-[100%] items-center justify-between absolute px-32 bg-gradient-to-b from-black z-10'>
      <img className='w-48'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt='logo' />  
      {
        user && 
        (
        <div className='flex items-center'>
          <IoIosArrowDropdown size={24} color='white'/>
          <h1 className='text-lg font-semibold text-white'> {user.userName}</h1>
          <div className='ml-8'>
            <button 
            className='bg-red-800 text-white px-4 py-2 rounded-sm'
            onClick={handleLogout}            
            >
              Logout
            </button> 

            <button
            onClick={handleToogle} 
            className='bg-red-800 text-white px-4 py-2 ml-2 rounded-sm'
            >
              {
                toogle? "Home" : "Search Movie"
              }
              
            </button>
          </div>
        </div>
       )
      }
    </div>
  )
}

export default Header