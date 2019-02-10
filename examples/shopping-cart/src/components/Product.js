import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";

const ProductContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const TitleSpan = styled("span")`
  font-size: 21px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 34px;
  }
`;

const PriceSpan = styled("span")`
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 21px;
  }
`;

const Product = ({ price, productTitle }) => (
  <ProductContainer>
    <TitleSpan>{productTitle}</TitleSpan>
    <PriceSpan>${price}</PriceSpan>
  </ProductContainer>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  productTitle: PropTypes.string
};

export default Product;
