import { useEffect, useState } from 'react';
import './App.css';
import { Interface } from 'readline';

interface Movie{
  title: string,
  release_date: string,
  overview: string,
  poster_path: string,
  popularity: number
}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  useEffect(()=>{
    chrome.storage.local.get(null).then((result)=>{
      const movieTitles = Object.keys(result);
      console.log(result);
      setHistory(movieTitles);
      console.log(movieTitles);
    })
    chrome.runtime.sendMessage({action: "get_movie_details"}, (response)=>{
      if(response && response.data){
        setMovie(response.data);
      }else{
        console.log("An Error occured");
      }
    })
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <h1>{movie?.title}</h1>
        <h1>{movie?.overview}</h1>
        <h1>{movie?.poster_path}</h1>
        <h1>{movie?.release_date}</h1>
        <h1>{movie?.popularity}</h1>
      </div>
    </div>
  );
}

export default App;
