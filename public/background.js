chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url?.includes("google.com/search")) {
      chrome.tabs.sendMessage(tabId, { message: "parse_movie_title" }, (response) => {
        if (response?.movieName) {
            fetchMovieDetails(response.movieName);
        }
      });
    }
  });
  
  function fetchMovieDetails(movieName) {
    const apiKey = "efd6f2d9596f0bbf7b92956d9ef2d643";
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
      .then(response => response.json())
      .then(data => {
        const movie = data.results[0];
        if (movie) {
          chrome.storage.local.set({ [movieName]: movie });
          console.log(movie);
        }
      });
  }