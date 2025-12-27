import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites"));
    if (stored) {
      setFavorites(stored);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie) {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  }

  function removeFromFavorites(id) {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  }

  function isFavorite(id) {
    return favorites.some((movie) => movie.imdbID === id);
  }

  return (
    <MovieContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// Custom hook
export function useMovieContext() {
  return useContext(MovieContext);
}
