import axios from "axios";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from '../redux/movieSlice';
import { useEffect } from "react";
import { options } from "../constants";


const useMovieById = async (movieId) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        })
        dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  },[])

}

export default useMovieById;