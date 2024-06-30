import { useEffect, useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import HistoryTable from './components/HistoryTable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setMovie } from './redux/movieSlice';
import { setHistory } from './redux/historySlice';

function App() {
  const movie = useSelector((state: RootState)=>state.movie.movie);
  const history = useSelector((state: RootState)=>state.history.history);
  const dispatch = useDispatch();
  useEffect(()=>{
    chrome.storage.local.get({ movie_search_history: [] }, (result) => {
      dispatch(setHistory(result.movie_search_history.reverse()));
    });
    const movied = {
      title: "Munna Bhai M.B.B.S.",
      release_date: "2005-06-10",
      overview:
      "A gangster sets out to fulfill his father's dream of becoming a doctor.A gangster sets out to fulfill his father's dream of becoming a doctorA gangster sets out to fulfill his father's dream of becoming a doctorA gangster sets out to fulfill his father's dream of becoming a doctor",
      poster_path: "/nZNUTxGsSB4nLEC9Bpa2xfu81qV.jpg",
      popularity: 91.778,
      genre_ids: [
        28,
        878,
        16,
        35
        ]
      };
      const searchHistory = [
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
        { movie_name: "Batman Wwji", search_date: "Sat Jun 29 2024" },
        { movie_name: "spider Man", search_date: "Sat Jun 29 2024" },
        { movie_name: "Batman Begins", search_date: "Sat Jun 29 2024" },
      ];
    // dispatch(setMovie(movied));
    // dispatch(setHistory(searchHistory));
    chrome.runtime.sendMessage({action: "get_movie_details"}, (response)=>{
      if(response && response.data){
        dispatch(setMovie(response.data));
      }else{
        console.log("Not a movie page");
      }
    });
  }, []);
  return (
    <div className='w-full flex-col space-y-1'>
     {movie && <MovieDetails/>}
     <HistoryTable/>
    </div>
  );
}

export default App;
