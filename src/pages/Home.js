import styled from "styled-components";
import background from "../assets/ships/Death Star.png"


export default function Home() {

const Home = styled.div`
min-height: 100vh;
background-color: #121212;
`

const Fundo = styled.img`
opacity: 0.4;
position: absolute;
bottom: 3%;
right: 3%;
width: 400px;
@media (min-width: 1024px) {
    width: 600px;
}
`

return (
    <Home>
        <Fundo src={background} alt="background image"/>
    </Home>
  );

}