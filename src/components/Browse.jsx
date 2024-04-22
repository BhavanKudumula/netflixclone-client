import React, { useEffect } from 'react';
import Header from './Header';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/upcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const toogle = useSelector((store) => store.movie.toogle)
  const navigate = useNavigate()
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  useEffect(() => {
    if(!user) {
      navigate("/")
      console.log("useEffect")
    }
  }, []);

  
  return (
    <div>
        <Header />
        {
          toogle ? <SearchMovie /> : ( 
            <>
              <MainContainer />
              <MovieContainer />
            </>
          )
        }
        
    </div>
  )
}

export default Browse