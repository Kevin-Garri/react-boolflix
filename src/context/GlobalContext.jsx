import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
}