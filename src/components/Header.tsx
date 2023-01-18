import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../assets/logo-nomadao.png";
import BurgerMenu from "./BurgerMenu";
import burger from "../assets/burger-menu.png";
import close from "../assets/close.svg";
import BasketLogo from "../assets/basket.png";
import ImageLogo from "../assets/image-avatar.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

interface Iprops {
  georgian: {
    main?: string;
    aboutUs?: string;
    nft: string;
  };
  english: {
    main?: string;
    aboutUs?: string;
    nft: string;
  };
}

interface OpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, setIsOpen }: OpenProps) => {
  const { t } = useTranslation();

  const currentLanguage = i18next.language;

  const handleChange = (e: any) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <Container>
      <LeftSide>
        <Logo src={LogoImage} alt="logo" />

        <NavContainer>
          <LinkContianer to="/main">{t("main")}</LinkContianer>
          <LinkContianer to="/about">{t("aboutUs")}</LinkContianer>
          <LinkContianer to="/nft">{t("nft")}</LinkContianer>
          <li>
            <select
              style={{
                width: "50px",
                border: "none",
                borderRadius: "15px",
                height: "30px",
                textAlign: "center",
              }}
              value={currentLanguage}
              onChange={handleChange}
            >
              <option value="geo">Geo</option>
              <option value="en">Eng</option>
            </select>
          </li>
        </NavContainer>
      </LeftSide>

      <RightSide>
        <Basket src={BasketLogo} alt="basket" />
        <User src={ImageLogo} alt="user" />
      </RightSide>

      {!isOpen && (
        <BurgerImg
          onClick={() => setIsOpen(!isOpen)}
          src={burger}
          alt="burger-menu"
        />
      )}
      <Modal isOpen={isOpen}>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Close onClick={() => setIsOpen(false)} src={close} alt="close" />
      </Modal>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(231 216 216 / 50%);
  transition: all ease-in 0.5s;
  padding-bottom: 20px;
  p {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-width: 1440px;
    
  }
`;

interface StyleProps {
  isOpen: boolean;
}

const Close = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px;
`;

const Modal = styled.div<StyleProps>`
  position: fixed;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const RightSide = styled.div`
  display: flex;
  gap: 20px;
`;

const BurgerImg = styled.img`
  display: block;
  height: 30px;
  width: 30px;
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 150px;
  display: block !important;
  @media screen and (min-width: 1440px) {
    width: 200px;
  }
`;

const NavContainer = styled.ul`
  display: none;
  gap: 20px;
  align-items: center;
  li {
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Basket = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;

const User = styled.img`
  display: none;
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;

const LinkContianer = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  :hover{
    background-color: #415bb1;
    border: 1px solid #415bb1;
    padding: 10px;
  }
`;
