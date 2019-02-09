import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import colors from "../styles/colors";
import breakpoints from "../styles/breakpoints";
import {
  removeFromCart,
  decreaseCartQuantity,
  increaseCartQuantity
} from "../actions";

const CartContainer = styled("div")`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding-bottom: 44px;
`;
const CartIcon = styled("img")`
  display: block;
  opacity: 0.35;
  width: 72px;
  height: 57px;
  margin: 120px auto 20px;
  filter: brightness(0.4);

  @media (min-width: ${breakpoints.tablet}px) {
    margin: 0 auto 20px;
    width: 94px;
    height: 75px;
  }
`;

const HeaderWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  position: relative;
  padding-bottom: 22px;
  flex-wrap: wrap;
  width: 100%;
  font-size: 28px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.horizontalRuleGray};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    margin: 0 0 25px;
    padding-bottom: 25px;
    font-size: 38px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin: 0 0 29px;
    padding-bottom: 34px;

    &:after {
    }
  }
`;

const CartItems = styled("div")`
  width: 100%;
  @media (min-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const CheckoutButton = styled("button")`
  border: none;
  outline: none;
  background-color: ${colors.blue};
  display: block;
  width: 100%;
  height: 44px;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${colors.darkBlue};
  }
  @media (min-width: ${breakpoints.tablet}px) {
    position: relative;
    bottom: initial;
    left: initial;
    width: auto;
    padding: 8px 17px;
    border-radius: 20px;
  }
`;

const CartTotals = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px 0;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 21px;
    font-size: 14px;

    &.taxes {
      border-bottom: 1px solid ${colors.horizontalRuleGray};
      padding-bottom: 21px;
    }

    .text {
      color: ${colors.gray};
    }
  }
`;

const Cart = ({
  products,
  total,
  tax,
  grandTotal,
  onCheckoutClicked,
  removeFromCart,
  decreaseCartQuantity,
  increaseCartQuantity
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        id={product.id}
        onRemoveFromCartClicked={() => removeFromCart(product.id)}
        onDecreaseQuantityClicked={() => decreaseCartQuantity(product.id)}
        onIncreaseQuantityClicked={() => increaseCartQuantity(product.id)}
      />
    ))
  ) : (
    <div
      className="cart-container"
      css={css`
        width: 100%;
      `}
    >
      <CartIcon src={`/images/cart.svg`} alt="cart" />
      <p
        css={css`
          color: ${colors.gray};
          text-align: center;
          max-width: 200px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 23px;
        `}
      >
        Please add some products to your cart.
      </p>
    </div>
  );

  return (
    <CartContainer>
      <HeaderWrapper>
        <h3
          css={css`
            margin: 0;
            font-weight: 400;
          `}
        >
          Your Cart
        </h3>
      </HeaderWrapper>
      <CartItems>{nodes}</CartItems>

      {hasProducts ? (
        <React.Fragment>
          <CartTotals>
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className="number">${total}</span>
            </div>
            <div className="taxes">
              <span className="text">Taxes</span>
              <span className="number">${tax}</span>
            </div>
            <div className="total">
              <span className="text">Total</span>
              <span className="number">${grandTotal}</span>
            </div>
          </CartTotals>
          <CheckoutButton onClick={onCheckoutClicked}>Checkout</CheckoutButton>
        </React.Fragment>
      ) : (
        ""
      )}
    </CartContainer>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  removeFromCart: PropTypes.func.isRequired,
  decreaseCartQuantity: PropTypes.func.isRequired,
  increaseCartQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { removeFromCart, decreaseCartQuantity, increaseCartQuantity }
)(Cart);
