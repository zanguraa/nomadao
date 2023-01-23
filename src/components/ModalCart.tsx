import styled from "styled-components";


const ModalCart = ({cartItems}: any) => {
  return (
  <CartContainer>

 <h2>Cart</h2>
<hr />
{cartItems.map((item: any, index: number) => {
  return(
<div style={{display: "flex", gap: "10px", alignItems: "center"}}>
  <h5>{item.title}</h5>
</div>
  )
})}
</CartContainer>

)
  

}

export default ModalCart;

const CartContainer = styled.div`
  width: 335px;
  height: 300px;
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
    font-size: 20px;
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
`;
