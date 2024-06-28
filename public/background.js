chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url?.includes("google.com/search")) {
      chrome.tabs.sendMessage(tabId, { message: "parse_movie_title" }, (response) => {
        if (response?.movieName) {
            console.log(response.movieName)
        }
      });
    }
  });
  
  