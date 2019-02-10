import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { getTotal, getCartProducts, getTax, getGrandTotal } from "../reducers";
import Cart from "../components/Cart";
import { Link } from "@reach/router";
import colors from "../styles/colors";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";

const CartContainerStyled = styled("div")`
  background: ${colors.white};
  padding: 48px 17px 21px;
  position: relative;
  height: auto;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}px) {
    border-radius: 20px;
    padding: 68px 80px;
    margin: 15vh auto;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    max-width: 780px;

    &.empty {
      min-height: 70vh;

      .cart-container {
        margin-top: 110px;
      }
    }
  }
`;

const CloseLink = styled(Link)`
  position: absolute;
  top: 18px;
  right: 19px;
  text-decoration: none;
  width: 20px;
  height: 20px;
  text-indent: -99999px;

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: ${colors.closeCrossGray};
    transition: background-color 0.1s ease;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:before,
    &:after {
      background-color: ${colors.darkgray};
    }
  }

  @media (min-width: ${breakpoints.tablet}px) {
    top: 30px;
    right: 28px;
    width: 40px;
    height: 40px;

    &:before,
    &:after {
      left: 20px;
      height: 40px;
    }
  }
`;

const CartContainer = ({
  products,
  total,
  checkout,
  removeFromCart,
  tax,
  grandTotal
}) => {
  const hasProducts = products.length > 0;
  return (
    <CartContainerStyled className={hasProducts ? "" : "empty"}>
      <CloseLink to="/">x</CloseLink>
      <Cart
        products={products}
        total={total}
        tax={tax}
        grandTotal={grandTotal}
        onCheckoutClicked={() => checkout(products)}
      />
    </CartContainerStyled>
  );
};

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productTitle: PropTypes.string.isRequired,
      price: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string,
  tax: PropTypes.string,
  grandTotal: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
  tax: getTax(state),
  grandTotal: getGrandTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer);
