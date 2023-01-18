import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
}

interface StyleProps {
  isOpen: boolean;
}

const BurgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  const currentLanguage = i18next.language;

  const handleChange = (e: any) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <BurgerMenuContainer isOpen={isOpen}>
      <BurgerContainer>
        {isOpen && (
          <NavList>
            <LinkContianer to="/main">{t("main")}</LinkContianer>
            <LinkContianer to="/about">{t("aboutUs")}</LinkContianer>
            <LinkContianer to="/nft">{t("nft")}</LinkContianer>
            <li>
              {" "}
              <select value={currentLanguage} onChange={handleChange}>
                <option value="geo">Geo</option>
                <option value="en">Eng</option>
              </select>
            </li>
          </NavList>
        )}
      </BurgerContainer>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;

const BurgerContainer = styled.div`
padding: 20px;
  
`;


const BurgerMenuContainer = styled.div<StyleProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 90%;
  background: #070724;
  height: 100vh;
  z-index: 10;
  @media screen and (min-width: 768px) {
   display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

const LinkContianer = styled(Link)`
  text-decoration: none;
  color: white;
`;
