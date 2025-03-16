import React from 'react'

const VideoTitle = (props) => {
    return (
        <div className='pt-[15%] px-12 absolute bg-gradient-to-r from-black  w-screen aspect-video'>
            <h1 className=' text-6xl font-extrabold tracking-wide text-white'>{props.title}</h1>
            <div className='text-gray-500 pt-9 font-medium w-1/2 text-2xl'>{props.description}</div>
            <div className='flex gap-5 mt-8'>
                <button className='text-black bg-white p-3 rounded font-bold px-7'>Watch Movie</button><button className='text-white bg-gray-600 p-3 font-bold rounded px-7 opacity-60'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
