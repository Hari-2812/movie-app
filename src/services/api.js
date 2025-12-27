const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";


export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}?s=avengers&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};


export const searchMovies = async (query) => {
  if (!query) return [];

  const response = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};


export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`
  );
  return response.json();
};
