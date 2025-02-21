import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { addToFavourites, removeFromFavourites } from "../redux/actions/favouritesAction";
import NavBar from "./NavBar";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favouriteSongs);
  const dispatch = useDispatch();

  const handleClick = (song) => {
    const indexOfSong = favourites.findIndex((obj) => obj.id === song.id);

    if (indexOfSong !== -1) {
      dispatch(removeFromFavourites(indexOfSong));
    } else {
      dispatch(addToFavourites(song));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
          <NavBar />
          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Favourite songs</h2>
                <Row
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="favouriteSection"
                >
                  {favourites.map((song) => (
                    <Row className="d-flex flex-column mb-3" key={song.id}>
                      <Col style={{ cursor: "pointer" }}>
                        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                      </Col>

                      <p className="m-0">{song.title}</p>
                      <Col className="d-flex gap-3 align-items-center justify-content-between">
                        <p>{song.artist.name}</p>

                        <HeartFill
                          className="me-auto"
                          style={{
                            cursor: "pointer",
                            fill: "white",
                            stroke: "white",
                            strokeWidth: 1,
                          }}
                          viewBox="-1 0 18 16"
                          onClick={() => {
                            handleClick(song);
                          }}
                        />
                      </Col>
                    </Row>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
