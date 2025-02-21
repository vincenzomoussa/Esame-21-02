import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./components/MainPage";
import Player from "./components/Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </>
  );
}

export default App;
