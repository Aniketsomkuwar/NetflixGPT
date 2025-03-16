import React, { useEffect } from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from '../Components/MainContainer/MainContainer';
import SecondaryContainer from '../Components/SecondaryContainer/SecondaryContainer';
const BrowsePage = () => {
    useNowPlayingMovies();

    return (
        <div>
            <MainContainer />

            <SecondaryContainer />

        </div >
    )
}

export default BrowsePage
