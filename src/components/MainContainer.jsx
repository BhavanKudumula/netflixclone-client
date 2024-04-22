import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const nowPlayingMovie = useSelector((store) => store.movie?.nowPlayingMovies);
  if(!nowPlayingMovie) return;

  const {overview, id, title} = nowPlayingMovie[0];
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id} isPopup={false} />
    </div>
  )
}

export default MainContainer