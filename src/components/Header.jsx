import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { fetchFilms, fetchSeries } = useGlobalContext();
  const [searchTerms, setSearchTerms] = useState("");

  const handSearch = (e) => {
    e.preventDefault();
    fetchFilms(searchTerms);
    fetchSeries(searchTerms);
  };

  return (
    <header>
      <nav className="navbar bg-dark text-bg-dark">
        <div className="container-fluid">
          <h1 className="font-weight-bold text-danger">BoolFlix</h1>
          <form className="d-flex" role="search" onSubmit={handSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Titoli, Persone, Generi..."
              aria-label="Cerca"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">
              Cerca
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;