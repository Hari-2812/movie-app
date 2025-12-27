import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return <h2>No favorite movies yet ❤️</h2>;
  }

  return (
    <div className="movie-list">
      {favorites.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Favorites;
