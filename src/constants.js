export const API_END_POINT='http://localhost:8000/api/v1/user';
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjZmOWRlMmRlNjJlZjkyOTBjNzA2MjI1ZjU2YmY1NCIsInN1YiI6IjY2MTY1MWM3YzY4YjY5MDE3YjIwMTkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.le9VZoajZUrS-ATwgTFN-RG5MpyFsLUcRWClJf9D0E8'
    }
};

export const NOW_PLAYING_MOVIES_API="https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR_MOVIES_API="https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES_API="https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_API="https://api.themoviedb.org/3/movie/upcoming";
export const TMDB_IMG_URL='https://image.tmdb.org/t/p/w500';
export const SEARCH_MOVIE_API="https://api.themoviedb.org/3/search/movie?query="