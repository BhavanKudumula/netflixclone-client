import axios from 'axios';
import React, { useState } from 'react'
import { SEARCH_MOVIE_API, options } from '../constants';
import { useDispatch, useSelector } from 'react-redux'
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setIsLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [isMovieSearched, setIsMovieSearched] = useState(false);
  const dispatch = useDispatch()
  const isLoading = useSelector(store => store.app.isLoading)
  const {movieName, searchedMovie} = useSelector(store => store.searchMovie)
  console.log(movieName)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    try {
      const res = await axios.get(`${SEARCH_MOVIE_API}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      console.log(res);
      const movies = res?.data?.results;
      setIsMovieSearched(true);
      dispatch(setSearchMovieDetails({searchMovie, movies}))
    } catch (error) {
      console.log(error)
    }finally{
      dispatch(setIsLoading(false))
    }
    setSearchMovie("")
  }

  return (
    <>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form 
          className='w-[50%]'
          onSubmit={submitHandler}
        >
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%'>
            <input
              className='w-full outline-none rounded-md text-lg'
              type='text' 
              placeholder='Search Movies...' 
              value={searchMovie}
              onChange={(e) => {setSearchMovie(e.target.value)}}
            />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {
        
        isMovieSearched && searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
      }
      {console.log(isMovieSearched)}
    </>
  )
}

export default SearchMovie