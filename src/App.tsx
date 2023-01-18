import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import geo from "./locales/geo.json";
import eng from "./locales/eng.json";
import Item from "./components/Item";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    geo: { translation: geo },
    en: { translation: eng },
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Item
        title="satauri"
        description="    Buy and sell Steam items without transferring them to DMarket. Avoid one trade hold period during each trade and so reduce the total cooldown by half. Use item in the game until it’s sold.
"
        picture="foto.ge"
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 100px;
  background: linear-gradient(#e66465, #9198e5);
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`;
