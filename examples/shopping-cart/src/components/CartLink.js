import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getCartProductsQuantity } from "../reducers";
import styled from "@emotion/styled";
import colors from "../styles/colors";

const CartLinkStyled = styled(Link)`
  color: ${colors.darkgray};
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: ${colors.blue};

    img {
      filter: brightness(0.5) sepia(0.5) hue-rotate(184deg) saturate(4);
    }
  }
`;

const CartIcon = styled("img")`
  display: inline-block;
  width: 17px;
  margin-right: 8px;
  opacity: 0.95;
  filter: brightness(0.2);
`;

const CartLink = ({ productsQuantity }) => (
  <CartLinkStyled to="/cart">
    <span>
      <CartIcon src={require("../images/cart.svg")} alt="cart" />
      {productsQuantity ? productsQuantity : "Your cart is empty"}
    </span>
  </CartLinkStyled>
);

CartLink.propTypes = {
  productsQuantity: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  productsQuantity: getCartProductsQuantity(state)
});

export default connect(mapStateToProps)(CartLink);
