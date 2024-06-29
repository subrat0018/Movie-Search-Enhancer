import React from "react";
import genre from "../data/data.js"
const Movie = () => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movie = {
    title: "Batman Begins",
    release_date: "2005-06-10",
    overview:
      "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman",
    poster_path: "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
    popularity: 91.778,
    genre_ids: [
      28,
      878
      ]
  };
  return (
    <div className="flex space-x-4">
      <div className="p-6">
        <img className=" shadow-lg shadow-white"
          src={baseImgUrl + movie?.poster_path}
          alt={movie?.title + " Image"}
        />
      </div>
      <div className="p-6">
        <p className=" text-4xl font-bold text-white">{movie?.title}</p>
        <p className=" text-xs text-white mt-2">{movie?.overview}</p>
        <div className="flex space-x-5 mt-3">
            <div className="flex-col space-y-2">
                <p className="text-sm blackish-white font-medium">Release Date</p>
                <p className="text-sm blackish-white font-medium">Popularity</p>
                <p className="text-sm blackish-white font-medium">Genres</p>
            </div>
            <div className="flex-col space-y-2">
                <p className="text-sm text-white">{movie?.release_date}</p>
                <p className="text-sm text-white">{movie?.popularity} 🔥</p>
                <ul className="flex space-x-1">{movie?.genre_ids.map((item, index)=><li className="text-white text-sm">{genre[item as keyof typeof genre]}{index === movie?.genre_ids.length-1?"":","}</li>)}</ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
