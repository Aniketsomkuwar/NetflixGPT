import React from 'react'
import { useState, useEffect } from 'react';
import { API_OPTIONS } from "../Utils/constants";
const useFetchTrailer = (movieId) => {


    const [trailer, setTrailer] = useState();
    const fetchTrailer = async (movieId) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();

        const trailerData = json?.results?.filter((item) => {
            return item.type === "Trailer";
        });

        //to handle error if no trailer is there in the database
        if (trailerData.length) {
            setTrailer(trailerData[0]?.key);
        } else {
            setTrailer(json?.results[0]?.key);
        }
    };

    useEffect(() => {
        fetchTrailer(movieId);
    }, []);

    return trailer;

}

export default useFetchTrailer
