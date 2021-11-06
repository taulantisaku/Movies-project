import { useState, useEffect } from "react";
import API from "../../api/index";

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.movies
      .getMovies()
      .then((movies) => {
        setLoading(false);
        setMovies(movies);
      })
      .catch((e) => {});
  }, []);

  return { movies, loading };
};

export default useFetch;
