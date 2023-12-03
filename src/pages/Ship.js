import styled from "styled-components";
import Top from "../components/Top";
import ShipStats from "../components/shipPage/ShipStats";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectData } from "../components/redux/reducers";
import loading from "../assets/loading.webp";

let ShipPage = styled.div`
  min-height: 100vh;
  font-family: "Major Mono Display", monospace;
  font-size: 32px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    justify-content: start;
  }
`;

let ShipShow = styled.div`
  font-family: "Montserrat";
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
`;

let ShipText = styled.div`
  font-size: 70%;
  @media (max-width: 1024px) {
    font-size: 60%;
    margin-right: 0 !important;
  }
`;

let ShipShowIMG = styled.img`
  width: 30%;
  height: fit-content;
  @media (max-width: 1024px) {
    width: 70%;
    margin-bottom: 50px;
  }
`;

let LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: auto;
  padding-top: 10%;
`;

export default function Ship() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isLoading = useSelector((state) => state.data.isLoading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData(window.location.href.split("api/")[1]));
    // console.log(data.results);
  }, [dispatch]);

  if (isLoading) {
    return (
      <LoadingIndicator>
        <img src={loading} alt="loading"></img>
      </LoadingIndicator>
    );
  }
  if (error) {
    return <ShipShow>Error: {error}</ShipShow>;
  }
  if (data.name) {
    return (
      <ShipPage>
        <Top name={"«back"} link={"/list"} />

        <ShipShow>
          <ShipShowIMG
            src={require(`../assets/ships/${data.name}.png`)}
            alt="ship"
          ></ShipShowIMG>
          <ShipText>
            <h1>{data.name}</h1>
            <ShipStats />
          </ShipText>
        </ShipShow>
      </ShipPage>
    );
  } else {
    return <div>no data available</div>;
  }
}
