import React from "react";
import PropTypes from "prop-types";

const Product = ({
  price,
  quantity,
  title,
  onRemoveFromCartClicked,
  onDecreaseQuantityClicked,
  onIncreaseQuantityClicked
}) => (
  <React.Fragment>
    <div>
      {title} - &#36;
      {price}
    </div>
    <button onClick={onRemoveFromCartClicked}>Remove</button>
    <div className="quantity-controls">
      <button onClick={onDecreaseQuantityClicked}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncreaseQuantityClicked}>+</button>
    </div>
  </React.Fragment>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onDecreaseQuantityClicked: PropTypes.func.isRequired,
  onIncreaseQuantityClicked: PropTypes.func.isRequired
};

export default Product;
