import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { Router } from "@reach/router";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import colors from "../styles/colors";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/getProducts";

const AppContainer = styled("div")`
  max-width: 1120px;
  margin: 0 auto;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    return (
      <AppContainer>
        <Global
          styles={css`
            body {
              color: ${colors.black};
              margin: 0;
              font-family: "arial";
              background-color: ${colors.backgroundGray};
              -webkit-font-smoothing: antialiased;
              min-width: 320px;
            }
          `}
        />
        <Router>
          <ProductsContainer path="/" />
          <CartContainer path="/cart" />
        </Router>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(App);
