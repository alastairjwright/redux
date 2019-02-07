import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getCartProductsQuantity } from "../reducers";

const CartLink = ({ productsQuantity }) => (
  <Link to="/cart">
    <span>
      Cart Icon:
      {productsQuantity ? productsQuantity : "Your cart is empty"}
    </span>
  </Link>
);

CartLink.propTypes = {
  productsQuantity: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  productsQuantity: getCartProductsQuantity(state)
});

export default connect(mapStateToProps)(CartLink);
