import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";

interface Props {
    count: number;
    plusHandler: MouseEventHandler;
    minusHandler: MouseEventHandler
    setCount: any;
}

const ItemCount = ({plusHandler, minusHandler, count, setCount}: Props) =>  {


  return (
    <Container >
      <img
        className=" cursor-pointer"
        onClick={minusHandler}
        src={Minus}
        alt="minus"
      />
      <p className="font-bold text-base">{count}</p>
      <img
        className=" cursor-pointer"
        onClick={plusHandler}
        src={Plus}
        alt="plus"
      />
    </Container>
  );
}

export default ItemCount;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
    align-items: center;
    p{
    color: white;
font-weight: 800;
    }
    img{
      padding: 10px;
      cursor: pointer;
    }
`