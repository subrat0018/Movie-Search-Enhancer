chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "parse_movie_title") {
    let movieName = document.getElementsByClassName("B5dxMb")[0].innerHTML;
    console.log(movieName);
    if(movieName){
      sendResponse({data: movieName });
    }else{
      sendResponse({error: "No movie found"});
    }
    }
  });
  