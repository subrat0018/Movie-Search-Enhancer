let movieDetails = null;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url?.includes("google.com/search")
  ) {
    chrome.tabs.sendMessage(
      tabId,
      { message: "parse_movie_title" },
      (response) => {
        if (response && response.data) {
          const movieName = response.data;
          chrome.storage.local.get(movieName).then((results) => {
            if (results[movieName]) {
              console.log(results.key);
              movieDetails = results[movieName];
            } else {
              console.log("No Response");
              // fetchMovieDetails(response.data);
            }
          });
        } else {
          console.log(response?.error);
          movieDetails = null;
        }
      }
    );
  } else {
    movieDetails = null;
  }
});

function fetchMovieDetails(movieName) {
  const apiKey = "efd6f2d9596f0bbf7b92956d9ef2d643";
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const movie = data.results[0];
      if (movie) {
        movieDetails = {
          title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster_path: movie.poster_path,
          popularity: movie.popularity,
        };
        chrome.storage.local.set({ [movieName]: movieDetails });
        console.log("Movie " + movieName + " is added to the list...");
        chrome.tabs.sendMessage(tabId, { message: "new_movie_added" });
      }
    });
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("A message recieved");
  if (message.action === "get_movie_details") {
    if (movieDetails) {
      sendResponse({ data: movieDetails });
    } else {
      sendResponse({ error: "No movie details available" });
    }
  }
});
