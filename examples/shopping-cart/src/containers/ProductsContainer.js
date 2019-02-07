import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import CartLink from "../components/CartLink";

const ProductsContainer = ({ products, addToCart }) => (
  <React.Fragment>
    <h1>Acme Store</h1>
    <CartLink />
    <ProductsList>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      ))}
    </ProductsList>
  </React.Fragment>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
