chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "parse_movie_title") {
      let movieName = null;
  
      const selectors = [
        ".B5dxMb",      //Google suggested
        ".DKV0Md",      //Wikipedia     
        ".MBeuO",       //IMDB and general search results heading                   
      ];
  
      for (let selector of selectors) {
        const element = document.querySelector(selector);
        if (element && element.innerText) {
          movieName = element.innerText.split(" ")[0];
          break;
        }
      }
      if (movieName) {
        sendResponse({ data: movieName });
      } else {
        sendResponse({ error: "No movie found" });
      }
    }
  });
  