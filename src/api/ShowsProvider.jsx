import { createContext, useContext, useEffect, useState } from "react";

const ShowsContext = createContext();

export function useShows() {
  return useContext(ShowsContext);
}

export function ShowsProvider({ children }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .then((data) => data.map((item) => item.show))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ShowsContext.Provider value={shows}>
      {children}
    </ShowsContext.Provider>
  );
}
