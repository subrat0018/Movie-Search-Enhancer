export interface Movie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  popularity: number;
  genre_ids: number[];
}
export interface History {
  movie_name: string;
  search_date: string;
}
