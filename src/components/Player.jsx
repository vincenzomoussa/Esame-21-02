import { Col, Container, Row } from "react-bootstrap";
import next from "../assets/img/next.png";
import play from "../assets/img/play.png";
import prev from "../assets/img/prev.png";
import repeat from "../assets/img/repeat.png";
import shuffle from "../assets/img/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const artistName = useSelector((state) => state.player.song.artist);
  const songName = useSelector((state) => state.player.song.title);
  const urlImage = useSelector((state) => state.player.song.cover);

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className={`row d-flex h-100 align-items-center`}>
            <Col className="col-6 col-md-4 ">
              <div className="d-flex justify-content-start">
                <img src={urlImage} alt="" />
                <div className="ms-2">
                  <p className="m-0 text-spotify-muted fs-6">{artistName}</p>
                  <p className="m-0 text-white fs-6">{songName}</p>
                </div>
              </div>
            </Col>
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
              <div className="progress mt-3"></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
