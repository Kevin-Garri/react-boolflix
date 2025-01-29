import ListFilm from "../components/ListFilm";
import ListSeries from "../components/ListSeries";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <h1 className="titles">Film:</h1>
            <ListFilm />
          </div>
          <div className="row">
            <h1 className="titles">SerieTV:</h1>
            <ListSeries />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage