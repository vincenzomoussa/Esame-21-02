import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../redux/actions/favouritesAction";
import { HeartFill } from "react-bootstrap-icons";
import NavBar from "./NavBar";

const MainPage = () => {
  const isSearchPerformed = useSelector((state) => state.search.isSearchPerformed);
  const searchResults = useSelector((state) => state.search.results);
  const isLoading = useSelector((state) => state.search.loading);
  const hasError = useSelector((state) => state.search.error);
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
          {isSearchPerformed && (
            <Row>
              <Col className="col-10">
                <div id="rock">
                  <h2>Search Results: </h2>
                  <Row
                    className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  >
                    {searchResults.slice(0, 8).map((song) => {
                      const isFavourite = favourites.find((singleSong) => singleSong.id === song.id) !== undefined;

                      return (
                        <Row className="d-flex flex-column mb-5 transitionHover" key={song.id}>
                          {isLoading && (
                            <Spinner animation="border" role="status" variant="primary" className="d-block mx-auto">
                              <span className="visually-hidden">Loading...</span>
                            </Spinner>
                          )}
                          {hasError && <Alert variant="danger">{"Qualcosa è andato storto."}</Alert>}
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
                                fill: isFavourite ? "white" : "transparent",
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
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}

          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  <Cards artist="Queen" />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 imgLinks py-3" id="popSection">
                  <Cards artist="Katy Perry" />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row
                  className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  <Cards artist="Eminem" />
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
