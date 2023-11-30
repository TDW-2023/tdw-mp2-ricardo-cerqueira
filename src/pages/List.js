import styled from "styled-components";
import ship from "../assets/ships/A-wing.png"
import { Link } from "react-router-dom";
import "../App.css"
import Top from "../components/Top";

export default function List() {

    const ListStyles = styled.div`
    min-height: 100vh;
    font-family: 'Major Mono Display', monospace;
    font-size: 32px;
    font-weight: 400;
    display:flex;
    justify-content: center;
    flex-direction: column;
    `

const Ships = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
margin-top: 180px;
@media (max-width: 1240px) {
    margin-top: 20px;
}
`

const OneShip= styled.div`
display: flex;
flex-direction: column;
color: white;
font-family: 'Montserrat';
text-align: center;
padding-left: 60px;
padding-right:  60px;
margin-bottom: 40px;
@media (max-width: 1024px) {
    padding: 0;
}
`

const ShipIMG= styled.img`
width: 270px;
margin: 20px;
`

    return(
        <ListStyles>

<Top name={"project StarClaimer"} link={"/"}/>

            <Ships>
                <Link to={"/ship"}>
<OneShip>
<ShipIMG src={ship}></ShipIMG>
<h6>A-Wing</h6>
</OneShip>
</Link>

            </Ships>

        </ListStyles>
    )
}