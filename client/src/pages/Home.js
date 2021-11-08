import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, CardImg } from "reactstrap";
import Spinner from "../components/Spinner";
import useFetchMovies from "../components/shared/useFetchMovies";

export default function Home() {
  const { movies, loading } = useFetchMovies();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ textAlign: "center" }}>
          <div>
            <h2> Latest movies 2021 </h2>

            <Slider {...settings}>
              {movies.map((movie) => (
                <Col key={movie._id}>
                  <CardImg
                    top
                    style={{ objectFit: "contain", marginTop: 50 }}
                    width="100%"
                    height={400}
                    src={movie.img}
                    alt="Card image cap"
                  />
                </Col>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
