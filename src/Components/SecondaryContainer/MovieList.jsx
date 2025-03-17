import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {


    // to check if movies is coming to null
    if (!Array.isArray(movies) || movies.length === 0) return null;
    return (
        <div className='py-5'>
            <h1 className='font-bold text-white text-xl mb-2'>{title}</h1>
            <div className='flex gap-5 overflow-x-scroll no-scrollbar '>

                <div className='flex gap-2'>
                    {movies?.map((movie) => (

                        <MovieCard key={movie.id} image={movie.poster_path} name={movie.poster_title} />
                    ))}
                </div>



            </div>
        </div>
    )
}

export default MovieList
