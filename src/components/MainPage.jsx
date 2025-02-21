import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import CardComponent from "./CardComponent";
import { useSelector } from "react-redux";

const MainPage = () => {
  const isSearchOn = useSelector((state) => state.search.isSearchPerformed);
  const searchResults = useSelector((state) => state.search.results);

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
          {isSearchOn && <CardComponent artist={searchResults} />}

          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  <CardComponent artist="Queen" />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                  <CardComponent artist="Katy Perry" />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  <CardComponent artist="Eminem" />
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
