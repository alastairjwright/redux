import React from "react";
import PropTypes from "prop-types";

const Product = ({ price, title }) => (
  <div>
    {title} - &#36;
    {price}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
