import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setMovie } from "../redux/movieSlice";
import { setHistory } from "../redux/historySlice";

const HistoryTable = () => {
  const searchHistory = useSelector((state: RootState)=>state.history.history);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between">
      <p className="text-white m-3 text-lg">Search History</p>
      <p className=" text-red-500 m-3 text-lg cursor-pointer" onClick={()=>{
        chrome.storage.local.remove("movie_search_history").then((res)=>{
          console.log("removed Successfully");
        })
        dispatch(setHistory([]));
      }}>clear🗑️</p>
      </div>
      <div className="relative shadow-md sm:rounded-lg m-3 overflow-y-scroll h-44">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-44">
          <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie Name
              </th>
              <th scope="col" className="px-6 py-3">
                Search Date
              </th>
              <th scope="col" className="px-6 py-3">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {searchHistory.map((items, index) => (
              <tr key={index} className="odd:bg-gray-900 even:bg-gray-800  border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {items.movie_name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                >
                  {items.search_date}
                </th>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium  text-blue-500 hover:underline"
                    onClick={(e)=>{
                      e.preventDefault();
                      chrome.storage.local.get(items.movie_name).then((results)=>{
                        console.log(results);
                        console.log(items.movie_name);
                        console.log(results[items.movie_name]);
                        if (results[items.movie_name]) {
                          const movieDetails = results[items.movie_name];
                          dispatch(setMovie(movieDetails));
                        } else {
                          console.log("Some Error Ocurred");
                        }
                      })
                    }}
                  >
                    view
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
