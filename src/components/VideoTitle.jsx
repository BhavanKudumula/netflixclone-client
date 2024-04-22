import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4'>{overview}</p>
      <div className='flex mt-6'>
        <button 
          className='flex px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 items-center'
        >
          <CiPlay1 size={24}/>
          <span className='ml-1'>Play</span>
        </button>
        <button 
          className='flex px-6 mx-2 py-2 bg-gray-600 bg-opacity-50 text-black rounded-md'
        >
          <CiCircleInfo size={24}/>
          <span className='ml-1'>Watch More</span>
          </button>
      </div>
    </div>

  )
}

export default VideoTitle