import { NOW_PLAYING_MOVIES_API, options } from "../constants"
import axios from 'axios';
import { getNowPlayingMovies } from "../redux/movieSlice";
import {useDispatch} from 'react-redux'

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
         const res= await axios.get(NOW_PLAYING_MOVIES_API, options)
        //  console.log(res)
         dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
}

export default useNowPlayingMovies;