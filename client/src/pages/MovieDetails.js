import { useEffect, useState } from "react";
import { CardImg, CardTitle, CardText, Col } from "reactstrap";
import Spinner from "../components/Spinner";
import API from "../api/index";

export function MovieDetails(props) {
  //vijn props prej Routers props.mach.params
  const { movieId } = props.match.params;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.movies
      .getMovieDetails(movieId)
      .then((movie) => {
        console.log("movie:", movie);
        setLoading(false);
        setMovie(movie);
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      {loading || !movie ? (
        <Spinner />
      ) : (
        <Col>
          <CardImg
            top
            style={{ objectFit: "contain", marginTop: 10 }}
            width="100%"
            height={400}
            src={movie.img}
            alt="Card image cap"
          />
          <CardTitle tag="h1">{movie.title}</CardTitle>
          <CardText>
            <strong>Director:</strong> {movie.director}
          </CardText>
          <CardText>
            <strong>Duration:</strong> {movie.duration}
          </CardText>
          <CardText>
            <strong>Price:</strong> {movie.price}
          </CardText>
          <CardText>
            <strong>Description:</strong> {movie.description}
          </CardText>
        </Col>
      )}
    </>
  );
}
