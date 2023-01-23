import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import geo from "./locales/geo.json";
import eng from "./locales/eng.json";
import Item from "./components/Item";
import ModalCart from "./components/ModalCart";
import { CartItem } from "./types/item";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    geo: { translation: geo },
    en: { translation: eng },
  },
});

type Item = {
  previusPrice: number;
  price: number;
  title: string;
  description: string;
  image: string;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { t, i18n, ready } = useTranslation();
  const items = t("items", { returnObjects: true }) as Item[];

  const totalQuantity = cartItems.reduce((a, b: CartItem) => a + b.quantity, 0);
  console.log(totalQuantity);

  return (
    <Container>
      <Header
        isOpen={isOpen}
        setCart={setCart}
        cart={cart}
        setIsOpen={setIsOpen}
        quantity={totalQuantity}
      />
      {cart && <ModalCart cartItems={cartItems} setCartItems={setCartItems} />}

      {items.map((item: Item, index: number) => (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          previusPrice={item.previusPrice}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 100px;
  background: #e66465;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`;
