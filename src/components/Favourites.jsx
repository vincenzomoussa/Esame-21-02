import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { addToFavourites, removeFromFavourites } from "../redux/actions/favouritesAction";

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
          <Row>
            <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Favourite songs</h2>
                <Row
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="favouriteSection"
                >
                  {favourites.map((song) => (
                    <Col key={song.id} style={{ cursor: "pointer" }} className="mb-3">
                      <img className="img-fluid" src={song.album.cover_medium} alt="track" />

                      <p id="artistaEbrano">
                        {song.title}
                        <br />
                        {song.artist.name}
                      </p>
                      <HeartFill
                        style={{
                          cursor: "pointer",
                          fill: "white",
                          stroke: "white",
                          strokeWidth: 2,
                        }}
                        viewBox="-1 0 18 16"
                        onClick={() => {
                          handleClick(song);
                        }}
                      />
                    </Col>
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
