import { t } from "i18next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemProps } from "../types/item";
import ItemCount from "./ItemCount";

const Item = ({
  title,
  description,
  price,
  previusPrice,
  cartItems,
  setCartItems,
  image,
}: ItemProps) => {
  const [count, setCount] = useState<number>(0);
  const plusHandler: React.MouseEventHandler = () => {
    setCount(count + 1);
  };

  const minusHandler: React.MouseEventHandler = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const addHandler = () => {
    if (count === 0) return;
    if (cartItems.find((item) => item.title === title)) {
      setCartItems(
        cartItems.map((item) => {
          if (item.title === title) {
            item.quantity += count;
          }
          return item;
        })
      );
    } else {
      const newItem = {
        title,
        quantity: count,
        price,
        image,
      };

      setCartItems([...cartItems, newItem]);
    }
    setCount(0);
  };

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }, [cartItems]);

  return (
    <ItemContainer>
      <LeftSide>
        <NftImg src={process.env.PUBLIC_URL + image} alt="nft" />
      </LeftSide>{" "}
      <RightSide>
        <TextContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextContainer>
        <PriceContainer>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h1 style={{ fontWeight: "700" }}>${price}</h1>
            <div
              style={{
                borderRadius: "24px",
                padding: "10px",
                backgroundColor: "red",
              }}
            >
              <h4 style={{ fontWeight: "700", fontSize: "25px" }}>50%</h4>
            </div>
          </div>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "300",
              textDecoration: "line-through",
            }}
          >
            ${previusPrice}
          </h2>
        </PriceContainer>
        <CountContainer>
          <ItemCount
            minusHandler={minusHandler}
            plusHandler={plusHandler}
            count={count}
          />
          <PurchaseButton onClick={addHandler}>
            {t("main.addBasket")}
          </PurchaseButton>
        </CountContainer>
      </RightSide>
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: unset;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-width: 1440px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all ease-in 0.5s;

  @media screen and (min-width: 1024px) {
    flex-basis: 40%;
  }
`;

const NftImg = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 300px;
  border-radius: 24px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  transition: all ease-in 0.5s;

  h2 {
    font-weight: 900;
    font-size: 30px;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    line-height: 27px;
    color: #2e2d2d;
    /* margin: 30px 0 50px; */
  }
  @media screen and (min-width: 1024px) {
    flex-basis: 60%;
    text-align: left;
    align-items: unset;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
`;

const PurchaseButton = styled.button`
  background-color: #0f2969;
  max-width: 250px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  &:hover {
    background-color: #2953bd;
    transition: all ease-in 0.5s;
  }
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  p {
    color: white;
  }
`;
