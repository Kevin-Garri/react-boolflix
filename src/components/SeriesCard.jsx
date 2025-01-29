import Stars from "./Stars";
import flags from "./LanguagesFlags";

const SeriesCard = ({ series }) => {
  const rating = Math.ceil(series.vote_average / 2);

  const flags = {
    it: "languages-flags/italian.png",
    en: "languages-flags/united-kingdom.png",
  };

  return (
    <div className="col-4 p-4">
      <div className="card">
        <img className="img-fluid" src="" alt="" />
        <div className="card-body">
          <h5 className="card-text">Titolo: {series.original_name}</h5>
          <p className="card-text">Titolo originale: {series.original_title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${series.poster_path}`}
            alt=""
          />
          <img
            src={flags[series.original_language]}
            alt={series.original_language}
          />
          <Stars vote={rating} />
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;