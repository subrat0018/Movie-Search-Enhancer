import { useEffect, useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import HistoryTable from './components/HistoryTable';
import { Movie, History } from './types';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setMovie } from './redux/movieSlice';
import { setHistory } from './redux/historySlice';

function App() {
  const movie = useSelector((state: RootState)=>state.movie.movie);
  const history = useSelector((state: RootState)=>state.history.history);
  const dispatch = useDispatch();
  useEffect(()=>{
    // chrome.storage.local.get({ movie_search_history: [] }, (result) => {
    //   setHistory(result.movie_search_history);
    // });
    const movied = {
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
      const searchHistory = [
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
      ];
    dispatch(setMovie(movied));
    dispatch(setHistory(searchHistory));
    // chrome.runtime.sendMessage({action: "get_movie_details"}, (response)=>{
    //   if(response && response.data){
    //     dispatch(setMovie(response.data));
    //   }else{
    //     console.log("An Error occured");
    //   }
    // });
  }, []);
  return (
    <div>
     <MovieDetails/>
     <HistoryTable/>
    </div>
  );
}

export default App;
