import styled from "styled-components";
import Top from "../components/Top";
import sitemap from "../assets/sitemap.png";

let AboutDiv = styled.div`
  font-size: 32px;
  font-weight: 400;
  font-family: "Major Mono Display";
  color: white;
`;

let AboutTitle = styled.header`
  font-family: "Montserrat";
  text-align: center;
  padding-top: 80px;
  font-weight: 600;
  @media (min-width: 1023px) {
    padding-top: 250px;
  }
`;

let AboutText = styled.p`
  font-weight: 400;
  font-family: "Montserrat";
  font-size: 20px;
  width: 40%;
  text-align: justify;
  margin: auto;
  padding-top: 60px;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

let SiteMapDiv = styled.div`
  padding-bottom: 100px;
  font-family: "Montserrat";
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 1000px;
    padding-left: 130px;
    @media (max-width: 1239px) {
      padding-left: 100px;
      width: 800px;
    }
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default function About() {
  return (
    <AboutDiv>
      <Top name={"project StarClaimer"} link={"/"} />

      <AboutTitle> About Project StarClaimer</AboutTitle>
      <AboutText>
        This is a small project that aims to create a simple environment for
        Star Wars fans to compare and find out more about the starships featured
        in the entire Star Wars universe.
        <br></br>
        <br></br>
        Made by:{" "}
        <a href="https://github.com/cerkeira">
          <i>
            <b>cerkeira</b>
          </i>
        </a>
        <br></br>
      </AboutText>
      <SiteMapDiv>
        <h4>Site Map</h4>
        <img src={sitemap} alt="sitemap"></img>
      </SiteMapDiv>
    </AboutDiv>
  );
}
