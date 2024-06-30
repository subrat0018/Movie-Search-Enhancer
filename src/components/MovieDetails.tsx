import genre from "../data/data.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.js";
const MovieDetails = () => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movie = useSelector((state: RootState) => state.movie.movie);
  return (
    <div className="flex space-x-4">
      <div className="p-3 w-1/2">
        <img
          className=" shadow-lg shadow-white h-80"
          src={baseImgUrl + movie?.poster_path}
          alt={movie?.title + " Image"}
        />
      </div>
      <div className="p-3 w-1/2">
        <p className=" text-2xl font-bold text-white">{movie?.title}</p>
        <p className=" text-xs text-white mt-2">{movie?.overview}</p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <p className="text-xs blackish-white font-medium">Release Date</p>
          <p className="text-xs text-white">{movie?.release_date}</p>
          <p className="text-xs blackish-white font-medium">Popularity</p>
          <p className="text-xs text-white">{movie?.popularity} 🔥</p>
          <p className="text-xs blackish-white font-medium">Genres</p>

          <ul className="flex space-x-1 overflow-x-auto">
            {movie?.genre_ids.map((item, index) => (
              index < 2 && <li key={index} className="text-white text-xs">
              {genre[item as keyof typeof genre]}
              {index === 1 ? "" : ","}
            </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex space-x-5 mt-3">
            <div className="flex-col space-y-2">
                <p className="text-sm blackish-white font-medium">Release Date</p>
                <p className="text-sm blackish-white font-medium">Popularity</p>
                <p className="text-sm blackish-white font-medium">Genres</p>
            </div>
            <div className="flex-col space-y-2">
                <p className="text-sm text-white">{movie?.release_date}</p>
                <p className="text-sm text-white">{movie?.popularity} 🔥</p>
                <ul className="flex space-x-1">{movie?.genre_ids.map((item, index)=><li key={index} className="text-white text-sm">{genre[item as keyof typeof genre]}{index === movie?.genre_ids.length-1?"":","}</li>)}</ul>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;
