export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc1ZjY5NWViZjU2OGZiNjkyZTAxOGI3MTEyZTUyYiIsIm5iZiI6MTc0MjExNzIzMC44MzYsInN1YiI6IjY3ZDY5OTZlZjZiOGQ1N2I0YTdiOTZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hLdbIbktNiVAJ-v0sz4NthfOEEfMJUwMNh4v6D8KErM'
    }
};

export const FETCH_LINKS = [
    {
        name: 'Playing Now',
        url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    },
    {
        name: 'Top Rated',
        url: 'https://api.themoviedb.org/3/movie/top_rated?page=1'
    },
    {
        name: 'Upcoming',
        url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
    }
];