import axios from "axios";
import { createContext, useContext, useState } from "react";

//creazione del context
const GlobalContext = createContext();

//impostazione apikey
const apiKey = import.meta.env.VITE_API_KEY;

//contenitore logica
function GlobalProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  //FILM
  const fetchFilms = (searchTerms) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchTerms}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setFilms(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
      });
  };

  //SERIE TV
  const fetchSeries = (searchTerms) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/tv?query=${searchTerms}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching series:", error);
      });
  };

  //valori ai miei componenti
  return (
    <GlobalContext.Provider
      value={{ films, setFilms, series, setSeries, fetchFilms, fetchSeries }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

//hook
const useGlobalContext = () => {
  return useContext(GlobalContext);
};

//esportazione dei componenti
export { useGlobalContext, GlobalProvider };