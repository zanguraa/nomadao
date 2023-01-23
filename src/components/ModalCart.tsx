import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface cartProps {
  cartItems: never[];
  setCartItems: React.Dispatch<React.SetStateAction<never[]>>;
}
const ModalCart = ({ cartItems, setCartItems }: cartProps) => {
  const totalPrice = cartItems.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );

  const deleteHandler = (title: any) => {
    const updatedItems = cartItems.filter((item: any) => item.title !== title);
    setCartItems(updatedItems);
  };

  return (
    <CartContainer>
      <h2>{t("main.basket")}</h2>
      <hr style={{ margin: "10px" }} />
      {cartItems.map((item: any, index: number) => {
        console.log(item.image);

        return (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              padding: "10px 0",
              borderBottom: "1px solid blue",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <img
                style={{ width: "30px", height: "30px", borderRadius: "24px" }}
                src={process.env.PUBLIC_URL + item.image}
                alt="product"
              />
              <h5>{item.title}</h5>
              <p>{item.quantity}</p>
              <p>${item.quantity * item.price}</p>
            </div>
            <button
              style={{
                backgroundColor: "#2953bd",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "24px",
                fontWeight: "700",
              }}
              onClick={() => deleteHandler(item.title)}
            >
              {t("main.delete")}
            </button>
          </div>
        );
      })}
      <h1 style={{ fontWeight: "800" }}>{t("main.total")}: {totalPrice}</h1>
    </CartContainer>
  );
};

export default ModalCart;

const CartContainer = styled.div`
  width: 335px;
 
  max-height: 100%;
  padding: 10px;
  z-index: 10;
  background-color: white;
  position: absolute;
  top: 80px;
  right: 5%;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  color: #5191fa;

  h2 {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 10px;
  }
  hr {
    margin-top: 27px;
    border: 1px solid #4076f8;
    width: 90%;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
