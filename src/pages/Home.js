import styled from "styled-components";
import background from "../assets/fundo.png";
import searcher from "../assets/searcher.svg";
import { Link } from "react-router-dom";

let HomeDiv = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-family: "Major Mono Display", monospace;
font-size: 32px;
font-weight: 400;
`;

let Background = styled.img`
opacity: 0.8;
position: absolute;
bottom: 3%;
right: 3%;
width: 400px;
@media (min-width: 1024px) {
  width: 600px;
}
`;

let Box = styled.div`
z-index: 2;
width: 70%;
background-color: black;
opacity: 0.8;
padding: 40px;
padding-bottom: 70px;
border-radius: 3px;
@media (min-width: 1024px) {
  width: 750px;
}
`;

let Title = styled.header`
color: #f8f8f8;
margin-left: 15px;
display: flex;
align-items: end;
cursor: default;
@media (max-width: 1024px) {
  margin-left: 0;
  font-size: 90%;
}
`;

let Search = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 40px;
`;

let SearchBox = styled.input`
width: 80%;
height: 30px;
outline: 2px solid #f8f8f8;
padding: 10px;
background-color: black;
color: white;
border: none;
`;

let SearchButton = styled.button`
width: 50px;
height: 50px;
outline: 2px solid #f8f8f8;
background-color: black;
border: none;
`;

let OR = styled.div`
color: #f8f8f8;
text-align: center;
margin-top: 40px;
`;

let ListButton = styled.button`
height: 50px;
width: 95% !important;
background-color: #f8f8f8;
color: black;
font-family: "Major Mono Display", monospace;
font-size: 70%;
font-weight: 600;
border: none;
cursor: pointer;
`;

let AboutLink = styled.p`
font-size: 17px;
margin: 0;
padding-top: 20px;
padding-left: 18px;
font-family: "Montserrat";
`;

export default function Home() {


  return (
    <HomeDiv>
      <Box>
        <Title>
          project <br></br> StarClaimer
        </Title>

        <Search>
          <SearchBox placeholder="Search Starship"></SearchBox>
          <SearchButton>
            <img src={searcher} alt="search"></img>
          </SearchButton>
        </Search>
        <OR>
          <h4>or</h4>
          <Link to={"/list"}>
            <ListButton>see full list</ListButton>
          </Link>
        </OR>
        <Link to={"/about"}>
          <AboutLink>Find more about the Project here »</AboutLink>
        </Link>
      </Box>

      <Background src={background} alt="background image" />
    </HomeDiv>
  );
}
