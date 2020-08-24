import React, { useEffect } from "react";

//import components
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import CartHeader from "./CartHeader";
import CartMain from "./CartMain";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";
import { getItem } from "../../store/cart";

const ShoppingCart = (props) => {
  useEffect(() => {
    getItem();
  }, []);
  console.log(props.item);

  return (
    <Wrapper>
      <Header />
      <Nav />
      <Container>
        <CartHeader />
        <CartMain />
        <div>{props.item.data && props.item.data.collection}</div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
  /* background-color: gainsboro; */
`;

const mapStateToProps = (state) => ({
  item: state.cartState,
});

export default connect(mapStateToProps, { getItem })(ShoppingCart);
