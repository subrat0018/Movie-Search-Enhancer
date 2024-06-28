chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "parse_movie_title") {
    let movieName = document.getElementsByClassName("B5dxMb")[0].innerHTML;
    sendResponse({ movieName });
    }
  });
  