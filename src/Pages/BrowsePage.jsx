import React, { useEffect } from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
const BrowsePage = () => {
    useNowPlayingMovies();

    return (
        <div
            className='className=" text-white justify-center flex items-center h-screen'
        // style={{
        //     backgroundImage: `url(${BgImage})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        // }}
        >
            <div>
                {/* Main movie */}
            </div>
            <div>
                {/* Movie List Card */}
            </div>
        </div>
    )
}

export default BrowsePage
