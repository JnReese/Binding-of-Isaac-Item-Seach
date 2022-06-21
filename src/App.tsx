import "./App.css";
import styled from "styled-components";
import SearchBar from "../src/components/SearchBar";

function App() {
  let logo = require("../src/components/PageImg/BOI.png");
  return (
    <div className="App">
      <Logo src={`/PageImg/BOI.png`}></Logo>
      <SearchBar />
    </div>
  );
}

export default App;

const Logo = styled.img`
  height: 250px;
`;
