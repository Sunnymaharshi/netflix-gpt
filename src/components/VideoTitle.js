import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-full aspect-video pt-[20%] px-20 text-white bg-gradient-to-r from-black bg-opacity-30'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <div className='p-3 text-xl w-1/4'>{overview.slice(0,overview.indexOf(".")+1)}</div>
        <div className='p-3'>
        <button className='bg-red-600  font-bold rounded-md p-2 mr-3 text-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-red-300  font-bold rounded-md p-2 text-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle