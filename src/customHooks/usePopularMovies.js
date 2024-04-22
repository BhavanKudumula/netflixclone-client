import axios from 'axios';
import { POPULAR_MOVIES_API, options } from "../constants";
import {useDispatch} from 'react-redux';
import { getPopularMovies } from "../redux/movieSlice";

const usePopularMovies = async () => {
    const dispatch = useDispatch();

    try {
        const res = await axios.get(POPULAR_MOVIES_API, options)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
};

export default usePopularMovies;
