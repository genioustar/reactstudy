import { useParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";

function Details() {
  const { id } = useParams();
  const qs = queryString.parse(window.location.search);
  const getMovieDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  console.log(qs);
  useEffect(() => {
    getMovieDetails();
  });
  return <h2>Details...</h2>;
}
export default Details;
