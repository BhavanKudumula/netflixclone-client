import axios from 'axios';
import { UPCOMING_MOVIES_API, options } from "../constants";
import {useDispatch} from 'react-redux';
import { getUpcomingMovies } from "../redux/movieSlice";

//TODO - component name should be changed
const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    
    try {
        const res = await axios.get(UPCOMING_MOVIES_API, options)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
};

export default useUpcomingMovies;
