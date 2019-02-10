import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import breakpoints from "../styles/breakpoints";

const ProductContainer = styled("div")`
  display: block;
  width: 100%;
  display: block;
  background: ${colors.white};
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 0;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin-bottom: 28px;
  }
`;

const ProductImageContainer = styled("div")`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 40%;
    height: 0;
    padding-top: 30%;
    position: relative;
  }
`;

const ProductImage = styled("img")`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 40%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetailsContainer = styled("div")`
  box-sizing: border-box;
  padding: 25px 23px;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 60%;
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RemainingSpan = styled("span")`
  color: ${colors.gray};
  display: block;
  margin-bottom: 26px;
  text-transform: uppercase;
  flex-grow: 1;
  font-size: 12px;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 13px;
  }
`;

const AddToCartButton = styled("button")`
  background-color: ${colors.blue};
  display: inline-block;
  color: ${colors.white};
  border: none;
  border-radius: 20px;
  padding: 8px 17px;
  font-size: 13px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.darkBlue};
  }
  &:disabled {
    background-color: ${colors.lightBlue};
    cursor: default;
  }
`;

const ProductItem = ({ product, onAddToCartClicked }) => (
  <ProductContainer>
    <ProductImageContainer>
      <ProductImage
        src={`/images/product_${product.id}.jpg`}
        alt={product.productTitle}
      />
    </ProductImageContainer>
    <ProductDetailsContainer>
      <Product
        productTitle={product.productTitle}
        price={product.price.value}
      />
      <RemainingSpan>{product.inventory} Remaining</RemainingSpan>
      <AddToCartButton
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? "" : "disabled"}
      >
        {product.inventory > 0 ? "Add to cart" : "Sold Out"}
      </AddToCartButton>
    </ProductDetailsContainer>
  </ProductContainer>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
