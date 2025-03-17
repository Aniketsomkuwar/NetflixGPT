import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies, addUpcomingMovies } from '../Utils/ReduxSlice/moviesSlice'
import { useEffect } from 'react'

const useGetMovies = (list, link) => {



    const dispatch = useDispatch();
    const getMovies = async () => {
        const data = await fetch(link, API_OPTIONS);
        const json = await data.json();



        if (list === 0) {
            dispatch(addPopularMovies(json.results));
            // console.log('popular =>', json.results);
        } else if (list === 1) {
            dispatch(addNowPlayingMovies(json.results));
            // console.log('Now Playing =>', json.results);
        } else {
            dispatch(addUpcomingMovies(json.results));
            // console.log('upcoming =>', json.results);
        }

    }
    useEffect(() => {
        getMovies()
    }, [])
}

export default useGetMovies;
