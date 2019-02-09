import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { Router } from "@reach/router";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import colors from "../styles/colors";

const AppContainer = styled("div")`
  max-width: 1120px;
  margin: 0 auto;
`;

const App = () => (
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

export default App;
