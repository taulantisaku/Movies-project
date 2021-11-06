import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
  Alert,
} from "reactstrap";
import Featured from "./Featured";
import { useMoviesContext } from "../../lib/context/MoviesContext";
import { Route, Switch, useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../lib/context/AuthContext";
import { DeleteConfirmation } from "../shared/DeleteConfirmation";

export default function Movie(props) {
  const { movie } = props;
  const history = useHistory();
  const moviesContext = useMoviesContext();
  const authContext = useAuthContext();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleOnToggleFeatured = () => {
    moviesContext.toggleFeatured(movie._id);
  };

  const handleEdit = () => {
    history.push(`/movies/edit/${movie._id}`);
  };

  const handleDetails = () => {
    history.push(`/movies/details/${movie._id}`);
  };

  const handleOnDelete = () => {
    moviesContext.deleteMovie(movie._id);
  };

  const handleOnDeleteConfirm = () => {
    setConfirmDelete(!confirmDelete);
  };

  const adminActions = authContext.isAdmin && (
    <>
      {confirmDelete ? (
        <DeleteConfirmation
          onConfirm={handleOnDeleteConfirm}
          onDelete={handleOnDelete}
        />
      ) : (
        <>
          <Button
            color="primary"
            style={{ marginRight: 10 }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button color="danger" onClick={handleOnDeleteConfirm}>
            Delete
          </Button>
        </>
      )}
    </>
  );

  const userActions = authContext.isUser && (
    <Button color="success" outlined>
      Add to cart
    </Button>
  );

  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="p-2">
        {authContext.isAdmin && (
          <Featured
            featured={movie.featured}
            onClick={handleOnToggleFeatured}
          />
        )}

        <CardImg
          top
          style={{ objectFit: "contain", marginTop: 10 }}
          width="100%"
          height={300}
          src={movie.img}
          alt="Card image cap"
        />

        <CardBody>
          <CardTitle tag="h5">
            {movie.title}
            <Button
              outline
              color="primary"
              size="sm"
              onClick={handleDetails}
              style={{ marginLeft: 10 }}
            >
              Movie Details
            </Button>
          </CardTitle>

          <CardText>Director: {movie.director}</CardText>
          <CardText>Duration: {movie.duration}</CardText>
          <CardText>Price: {movie.price}</CardText>

          {authContext.isAuthenticated && (
            <>
              {adminActions}
              {userActions}
            </>
          )}
        </CardBody>
      </Card>
    </Col>
  );
}
