import { Col, Container, Row } from "react-bootstrap";
import next from "../assets/img/next.png";
import play from "../assets/img/play.png";
import prev from "../assets/img/prev.png";
import repeat from "../assets/img/repeat.png";
import shuffle from "../assets/img/shuffle.png";

const Player = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="row h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className={`row h-100 d-flex justify-content-center align-items-center`}>
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
