import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { HeartFill } from "react-bootstrap-icons";
import { addToFavourites, removeFromFavourites } from "../redux/actions/favouritesAction";
import { PLAY_SONG } from "../redux/actions/playSongAction";

const Cards = (props) => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const [album, setAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favouriteSongs);

  const handleClick = (song) => {
    const indexOfSong = favourites.findIndex((obj) => obj.id === song.id);

    if (indexOfSong !== -1) {
      dispatch(removeFromFavourites(indexOfSong));
    } else {
      dispatch(addToFavourites(song));
    }
  };

  const fetchAlbums = (artist) => {
    setIsLoading(true);
    fetch(URL + artist)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then(({ data }) => {
        setAlbum(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    fetchAlbums(props.artist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && (
        <Spinner animation="border" role="status" variant="primary" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {album.slice(0, 4).map((song) => {
        const handleClick1 = () => {
          dispatch({
            type: PLAY_SONG,
            titlePayload: song.title,
            artistPayload: song.artist.name,
            urlPayload: song.album.cover_small,
          });
        };
        const isFavourite = favourites.find((singleSong) => singleSong.id === song.id) !== undefined;

        return (
          <Row className="d-flex flex-column transitionHover" key={song.id}>
            <Col style={{ cursor: "pointer" }}>
              <img className="img-fluid " src={song.album.cover_medium} alt="track" onClick={handleClick1} />
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
    </>
  );
};

export default Cards;
