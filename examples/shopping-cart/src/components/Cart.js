import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import {
  removeFromCart,
  decreaseCartQuantity,
  increaseCartQuantity
} from "../actions";

const Cart = ({
  products,
  total,
  onCheckoutClicked,
  removeFromCart,
  decreaseCartQuantity,
  increaseCartQuantity
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <div key={product.id}>
        <CartProduct
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          onRemoveFromCartClicked={() => removeFromCart(product.id)}
          onDecreaseQuantityClicked={() => decreaseCartQuantity(product.id)}
          onIncreaseQuantityClicked={() => increaseCartQuantity(product.id)}
        />
      </div>
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>
        Total: &#36;
        {total}
      </p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
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
