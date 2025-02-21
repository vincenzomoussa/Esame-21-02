import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./components/MainPage";
import Player from "./components/Player";
import Favourites from "./components/Favourites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </>
  );
}

export default App;
