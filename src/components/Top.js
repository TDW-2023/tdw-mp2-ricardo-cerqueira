import styled from "styled-components";
import searcher from "../assets/searcher.svg";
import { Link } from "react-router-dom";

let TopDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: absolute;
top: 20px;
padding: 20px;
width: 20%;
@media (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}
@media (max-width: 1024px) {
  position: relative;
}
`;

let Title = styled.header`
color: #f8f8f8;
margin-left: 15px;
@media (max-width: 768px) {
  margin-bottom: 30px;
  text-align: center;
}
`;

let Search = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 20px;
@media (max-width: 768px) {
  margin-left: none;
}
`;

let SearchBox = styled.input`
width: 300px;
height: 30px;
outline: 2px solid #f8f8f8;
padding: 10px;
background-color: black;
color: white;
border: none;
margin-right: 30px;
@media (max-width: 430px) {
  width: 170px;
}
`;

let SearchButton = styled.button`
width: 50px;
height: 50px;
outline: 2px solid #f8f8f8;
background-color: black;
border: none;
`;

export default function Top(props) {

  return (
    <TopDiv>
      <Link to={props.link}>
        <Title>{props.name}</Title>
      </Link>
      <Search>
        <SearchBox placeholder="Search Starship"></SearchBox>
        <SearchButton>
          <img src={searcher} alt="search"></img>
        </SearchButton>
      </Search>
    </TopDiv>
  );
}
