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
