import axios from 'axios';
import { TOP_RATED_MOVIES_API, options } from "../constants";
import {useDispatch} from 'react-redux';
import { getTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();

    try {
        const res = await axios.get(TOP_RATED_MOVIES_API, options)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
};

export default useTopRatedMovies;
