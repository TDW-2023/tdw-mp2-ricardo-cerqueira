import styled from "styled-components";
import credits from "../../assets/stats_icons/credits.png";
import speed from "../../assets/stats_icons/speed.png";
import cargo from "../../assets/stats_icons/cargo.png";
import hyperdrive from "../../assets/stats_icons/hyperdrive.png";
import { selectData } from "../redux/reducers";
import { useSelector } from "react-redux";

let Stat = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

let ShipStatsDiv = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
  img {
    width: 100px;
    padding-right: 30px;
  }
  li {
    display: flex;
    align-items: center;
  }
`;

export default function ShipStats() {
  const data = useSelector(selectData);

  return (
    <ShipStatsDiv>
      <li>
        <img
          src={require(`../../assets/ships/${data.name}.png`)}
          alt="model"
        ></img>
        <Stat>
          Model <b>{data.model}</b>
        </Stat>
      </li>
      <li>
        <img src={credits} alt="credits"></img>
        <Stat>
          Cost <b>{data.cost_in_credits} credits </b>{" "}
        </Stat>
      </li>
      <li>
        <img src={speed} alt="speed"></img>
        <Stat>
          Max Speed <b>{data.max_atmosphering_speed} kph</b>
        </Stat>
      </li>
      <li>
        <img src={cargo} alt="cargo"></img>
        <Stat>
          Cargo Capacity <b>{data.cargo_capacity} kg</b>
        </Stat>
      </li>
      <li>
        <img src={hyperdrive} alt="hyperdrive"></img>
        <Stat>
          Hyperdrive Rating <b>{data.hyperdrive_rating}</b>
        </Stat>
      </li>
    </ShipStatsDiv>
  );
}
