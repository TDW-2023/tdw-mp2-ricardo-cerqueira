import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectData } from "../redux/reducers";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import loading from "../../assets/loading.webp";

let OneShip = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Montserrat";
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

let ShipIMG = styled.img`
  width: 270px;
  margin: 20px;
`;

let Ships = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  flex-flow: wrap;
  margin-top: 150px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export default function ListShips(props) {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isLoading = useSelector((state) => state.data.isLoading);
  const error = useSelector((state) => state.data.error);
  const searchString = window.location.href.split("search=")[1];
  const location = useLocation();

  useEffect(() => {
    if (searchString) {
      dispatch(fetchData(`starships?search=${searchString}`));
    } else {
      dispatch(fetchData(`starships?page=${props.page}`));
    }
  }, [dispatch, props.page, searchString, location]);

  if (isLoading) {
    return (
      <Ships>
        <img src={loading} alt="loading"></img>
      </Ships>
    );
  }
  if (error) {
    return <Ships>Error: {error}</Ships>;
  }
  if (
    Array.isArray(data.results) &&
    data.results.length > 0 &&
    data.results[0].name
  ) {
    return (
      <div>
        <Ships>
          {data.results.map((item) => (
            <Link to={`/ship?url=${item.url}`} key={item.name}>
              <OneShip>
                <ShipIMG
                  src={require(`../../assets/ships/${item.name}.png`)}
                ></ShipIMG>
                <h6>{item.name}</h6>
              </OneShip>
            </Link>
          ))}
        </Ships>
      </div>
    );
  } else {
    return <Ships>no data available</Ships>;
  }
}
