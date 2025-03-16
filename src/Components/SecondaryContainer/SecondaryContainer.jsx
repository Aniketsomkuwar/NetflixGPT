import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useGetMovies from "../../hooks/useGetMovies"
const SecondaryContainer = () => {

    const PopularMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated?page=1'
    useGetMovies(1, PopularMoviesURL);

    const playingNowURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    useGetMovies(0, playingNowURL);

    const upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
    useGetMovies(2, upcomingURL);

    const movies = useSelector((store) => store?.movies);


    return (
        <div className='  pl-12 bg-black '>
            <div className='-mt-82 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />

            </div>
        </div>
    )
}

export default SecondaryContainer
