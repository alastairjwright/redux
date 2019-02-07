import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import { Router } from "@reach/router";

const App = () => (
  <div>
    <Router>
      <ProductsContainer path="/" />
      <CartContainer path="/cart" />
    </Router>
  </div>
);

export default App;
