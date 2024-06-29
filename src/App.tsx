import { useEffect, useState } from 'react';
import './App.css';
import { Interface } from 'readline';
import Movie from './components/Movie';
import HistoryTable from './components/HistoryTable';

interface Movie{
  title: string,
  release_date: string,
  overview: string,
  poster_path: string,
  popularity: number,
  genre_ids: number[]
}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  useEffect(()=>{
    // chrome.storage.local.get(null).then((result)=>{
    //   const movieTitles = Object.keys(result);
    //   console.log(result);
    //   setHistory(movieTitles);
    //   console.log(movieTitles);
    // })
    // chrome.runtime.sendMessage({action: "get_movie_details"}, (response)=>{
    //   if(response && response.data){
    //     setMovie(response.data);
    //   }else{
    //     console.log("An Error occured");
    //   }
    // });
  }, []);
  return (
    <div>
     <Movie/>
     <HistoryTable/>
    </div>
  );
}

export default App;
