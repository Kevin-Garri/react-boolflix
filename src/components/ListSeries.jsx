import { useGlobalContext } from "../context/GlobalContext";
import SeriesCard from "./SeriesCard";

const ListSeries = () => {
  const { series } = useGlobalContext();

  const tvSeries = series.map((tv) => (
    <SeriesCard key={tv.id} media={tv} />
  ));
  return <>{tvSeries}</>;
};

export default ListSeries;