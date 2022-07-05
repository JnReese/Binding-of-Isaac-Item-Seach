import "./App.css";
import styled from "styled-components";
import SearchBar from "../src/components/SearchBar";

function App() {
  return (
    <div className="App">
      <Logo src={`/PageImg/BOI.png`}></Logo>
      <Title>Item Lookup</Title>
      <SearchBar />
    </div>
  );
}

export default App;

const Logo = styled.img`
  height: 250px;
  display: block;
  width: 344px;
  object-fit: contain;
  margin: 0 auto;
`;
const Title = styled.h1`
  position: relative;
  height: 51px;
  display: block;
  margin: 0 auto;
  top: -74px;
  left: 105px;
  @media (max-width: 500px) {
    left: 10px;
  }
`;
