import { useGlobalContext } from "../context/GlobalContext";
import FilmCard from "./FilmCard";

const ListFilm = () => {
  const { films } = useGlobalContext();

  const Movies = films.map((film) => (
    <FilmCard key={film.id} media={film} />
  ));
  return <>{Movies}</>;
};

export default ListFilm;