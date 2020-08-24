import React from "react";

//import styles and assets
import styled from "styled-components";

const CartHeader = () => {
  return (
    <Container>
      <h4>Your Shopping Bag</h4>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  text-align: center;

  h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
`;

export default CartHeader;
