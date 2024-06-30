chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "parse_movie_title") {
      let movieName = null;
      //First get any wiki or imdb page result
      const elements = document.getElementsByTagName("a");
      for(let i=0;i<elements.length;i++){
        if(elements[i].href.includes("wiki") || elements[i].href.includes("imdb")){
          let text = elements[i].children[1]?.innerHTML.split(" ")[0];
          if(text){
            movieName = text;
            break;
          }
        }
      }
      //Check if google has suggested the movie title
      let text = document.querySelector(".B5dxMb")?.innerHTML;
      if(text){
        movieName = text;
      }
      console.log(movieName);
      if (movieName) {
        sendResponse({ data: movieName });
      } else {
        sendResponse({ error: "No movie found" });
      }
    }
  });
  