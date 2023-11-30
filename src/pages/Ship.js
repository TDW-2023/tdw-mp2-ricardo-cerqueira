import styled from "styled-components";
import ship from "../assets/ships/A-wing.png"
import Top from "../components/Top"
import credits from "../assets/credits.png"
import speed from "../assets/speed.png"
import cargo from "../assets/cargo.png"
import hyperdrive from "../assets/hyperdrive.png"


export default function List() {

    const ShipPage = styled.div`
    min-height: 100vh;
    font-family: 'Major Mono Display', monospace;
    font-size: 32px;
    font-weight: 400;
    color: white;
    display:flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1024px) {
        justify-content: start;
    }
    `

const ShipShow= styled.div`
font-family: 'Montserrat';
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 1024px) {
    flex-direction: column !important;
    justify-content: center !important;
    margin-top: 100px !important;
    text-align: center;
    margin-bottom: 40px;
}
`

const ShipText= styled.div`
font-size: 70%;
@media (max-width: 1024px) {
    font-size: 60%;
    margin-right: 0 !important;
}
`

const ShipStats= styled.ul`
list-style: none;
padding: 0;
margin:auto;
img{
    width:100px;
    padding-right: 30px;
}
li{
    display:flex;
    align-items: center;
}
`

const ShipShowIMG = styled.img`
width: 30%;
height: fit-content;
@media (max-width: 1024px) {
    width:70%;
    margin-bottom: 50px;

}
`

const Stat = styled.p`
display:flex;
flex-direction: column;
text-align: justify;
`

    return(
        <ShipPage>

<Top name={"«back"} link={"/list"}/>

            <ShipShow>
            <ShipShowIMG src={ship} alt="ship"></ShipShowIMG>
            <ShipText>
                <h1>A-Wing</h1>
                    <ShipStats>
                        <li><img src={ship} alt="model"></img><Stat>Model <b>CR90 corvette</b></Stat></li>
                        <li><img src={credits} alt="credits"></img><Stat>Cost <b>3500000 credits </b> </Stat></li>
                        <li><img src={speed} alt="speed"></img><Stat>Max Speed <b>950</b></Stat></li>
                        <li><img src={cargo} alt="cargo"></img><Stat>Cargo Capacity <b>3000000</b></Stat></li>
                        <li><img src={hyperdrive} alt="hyperdrive"></img><Stat>Hyperdrive Rating <b> 2.0</b></Stat></li>
                    </ShipStats>
            </ShipText>
            </ShipShow>


        </ShipPage>
    )

}