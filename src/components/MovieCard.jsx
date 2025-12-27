import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useMovieContext();

  const favorite = isFavorite(movie.imdbID);

  function onFavouriteClick() {
    favorite
      ? removeFromFavorites(movie.imdbID)
      : addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavouriteClick}>
            {favorite ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
