import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import geo from "./locales/geo.json";
import eng from "./locales/eng.json";
import Item from "./components/Item";
import ModalCart from "./components/ModalCart";

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
}

function App() {
  // const [title, setTitle] = useState<string >("")
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const { t, i18n, ready } = useTranslation();
  const items = t('items', { returnObjects: true }) as Item[];

  console.log(cartItems)

  return (
    <Container>
      <Header
        isOpen={isOpen}
        setCart={setCart}
        cart={cart}
        setIsOpen={setIsOpen}
        quantity={quantity}
      />
      {cart && <ModalCart cartItems={cartItems} />}

      {items.map((item: Item) => (
        <Item
          quantity={quantity}
          setQuantity={setQuantity}
          title={item.title}
          description={item.description}
          price={item.price}
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
