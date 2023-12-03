import styled from "styled-components";
import ListShips from "../components/listPage/ListShips";
import "../App.css";
import Top from "../components/Top";
import { useState, useEffect } from "react";
import { selectData } from "../components/redux/reducers";
import { useSelector } from "react-redux";

let ListStyles = styled.div`
  min-height: 100vh;
  font-family: "Major Mono Display", monospace;
  font-size: 32px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

let PageButtons = styled.button`
  width: 300px;
  font-family: "Major Mono Display", monospace;
  font-size: 32px;
  font-weight: 400;
  background-color: none;
  color: white;
  background-color: #121212;
  border: 2px solid white;
  margin: 40px;
  border-radius: 2px;
  cursor: pointer !important;
  &:active {
    background-color: #f8f8f8;
    color: black;
  }
`;

let Paging = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: default;

  @media (max-width: 1024px) {
    width: 70%;
    flex-direction: column;
  }
`;
export default function List() {
  const [page, setPage] = useState(1);
  const data = useSelector(selectData);
  const [previousButton, setPreviousButton] = useState(true);
  const [nextButton, setNextButton] = useState(true);

  useEffect(() => {
    setNextButton(true);
    setPreviousButton(true);

    if (!data.next) {
      setNextButton(false);
    }

    if (!data.previous) {
      setPreviousButton(false);
    }
  }, [data.previous, data.next]);

  const nextPage = () => {
    if (data.next) {
      setPage(data.next.split("page=")[1]);
    }
  };

  const previousPage = () => {
    if (data.previous) {
      setPage(data.previous.split("page=")[1]);
    }
  };

  return (
    <ListStyles>
      <Top name={"project StarClaimer"} link={"/"} />
      <ListShips page={page}></ListShips>
      <Paging>
        <PageButtons
          onClick={() => previousPage()}
          style={{ opacity: previousButton ? "1" : "0.1" }}
        >
          « previous
        </PageButtons>
        <PageButtons
          onClick={() => nextPage()}
          style={{ opacity: nextButton ? "1" : "0.1" }}
        >
          next »
        </PageButtons>
      </Paging>
    </ListStyles>
  );
}
