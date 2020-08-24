import React from "react";

//import styles and assets
import styled from "styled-components";

const CartItem = () => {
  return (
    <Container>
      <Image>img</Image>
      <Detail>
        <Collection></Collection>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 20%;
  background-color: aliceblue;
`;

const Detail = styled.div`
  width: 80%;
  padding: 1.25em;
  background-color: gold;
`;

const Collection = styled.div``;

export default CartItem;
