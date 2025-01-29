import Stars from "./Stars";

const FilmCard = ({ film }) => {
  const rating = Math.floor(film.vote_average);

  const flags = {
    it: "lang-flags/italian.png",
    en: "lang-flags/english.png",
  };

  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src="" alt="" />
        <div className="card-body">
          <h5 className="card-text">Titolo: {film.title}</h5>
          <p className="card-text">Titolo originale: {film.original_title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
            alt=""
          />
          <img
            src={flags[film.original_language]}
            alt={film.original_language}
          />
          <Stars vote={rating} />
        </div>
      </div>
    </div>
  );
};

export default FilmCard;