import React from "react";

//import components
import CartItem from "./CartItem";

//import styles and assets
import styled from "styled-components";

const CartMain = () => {
  return (
    <Container>
      <List>
        <CartItem />
      </List>
      <Total>Total</Total>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
  background-color: gainsboro;
`;

const List = styled.div`
  flex: 1;
  max-width: 65%;
  background-color: lightcoral;
`;
const Total = styled.div`
  max-width: 35%;
  background-color: lightgoldenrodyellow;
`;

export default CartMain;
