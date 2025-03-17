import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../Components/SecondaryContainer/MovieCard";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../Utils/constants";
import { addSearchedMovies } from "../Utils/ReduxSlice/moviesSlice";
import { OrbitProgress } from "react-loading-indicators";

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const param = useParams();
    const dispatch = useDispatch();

    const searchText = param?.searchValue;


    // why flat ? to combine all the arrays data
    const { searchedMovies, popularMovies } = useSelector((store) => store?.movies || {});

    const movies = Array.isArray(searchedMovies) ? searchedMovies.flat() : popularMovies;


    if (!Array.isArray(movies) || movies.length === 0) return null;

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGPTSearch = async (searchText) => {
        setLoading(true);

        const gptQuery = `Recommend 5 movie titles based on the following query: ${searchText}. Provide the movie titles as a plain list and do not provide anything in brackets, with each title on a new line. Do not include any introductory or explanatory text. Just provide the list of movie titles. Example Result: GADAR\nDHOOM\nDON\nGOLMAAL`;
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_OPENAI_API
                }`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: gptQuery,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || "Failed to fetch response.");
            }

            const data = await response.json();

            const gptMovies = data.candidates[0].content.parts[0].text.split("\n");



            // ------------------till here everything is correct ------------------------//

            //this will return array of promise
            const movieDataPromises = gptMovies.map((movie) =>
                searchMovieTMDB(movie)
            );

            const tmdbResults = await Promise.all(movieDataPromises);

            dispatch(addSearchedMovies(tmdbResults));

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGPTSearch(searchText);
    }, [searchText]);

    return (
        <div className="bg-black pb-20">
            {loading && (
                <div className="flex justify-center items-center h-[80vh]">
                    <div className="text-white">
                        <OrbitProgress className="" variant="track-disc" dense color="#ff0000" size="small" text="" textColor="" />
                    </div>
                </div>
            )}
            {!loading && (
                <div className="pt-[5%] grid grid-cols-5 gap-4 justify-items-center">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            image={movie.poster_path}
                            name={movie.title || movie.original_title}
                        />
                    ))}
                </div>
            )}
        </div>

    );
};

export default SearchPage;
