import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import List from "./pages/List";
import Ship from "./pages/Ship";
import About from "./pages/About";

let AppDiv = styled.div`
min-height: 100vh;
background-color: #121212;
max-width: 100vw;
`;

function App() {

  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
