export const searchTracks = (query) => (dispatch) => {
  console.log("Stiamo cercando: ", query);
  dispatch({ type: "SEARCH_START", payload: query });

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Dati ottenuti: ", data);
      dispatch({ type: "SEARCH_SUCCESS", payload: data });
    })
    .catch((error) => {
      console.error("Ops, si è verificato un errore: ", error);
      dispatch({ type: "SEARCH_FAIL", payload: error.message });
    });
};
