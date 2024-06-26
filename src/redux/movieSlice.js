import {createSlice} from '@reduxjs/toolkit';


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toogle: false,
        movieTrailer: null,
        open: false,
        id:"",
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setToogle: (state) => {
            state.toogle = !state.toogle;
        },
        getMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        setOpen: (state, action) => {
            state.open = action.payload
        },
        getId:(state, action) => {
            state.id = action.payload
        }
    }
});

export const { getNowPlayingMovies, 
               getPopularMovies, 
               getTopRatedMovies, 
               getUpcomingMovies,
               setToogle,
               getMovieTrailer,
               setOpen,
               getId,
            } 
            = movieSlice.actions;

export default movieSlice.reducer;