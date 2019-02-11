import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";
import colors from "../styles/colors";

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
TitleSpan.displayName = "TitleSpan";

const PriceSpan = styled("span")`
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 21px;
  }
`;
PriceSpan.displayName = "PriceSpan";

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
RemainingSpan.displayName = "RemainingSpan";

const Product = ({ price, productTitle, quantity }) => (
  <React.Fragment>
    <ProductContainer>
      <TitleSpan>{productTitle}</TitleSpan>
      <PriceSpan>{`$${price}`}</PriceSpan>
    </ProductContainer>
    {quantity ? <RemainingSpan>{`${quantity} Remaining`}</RemainingSpan> : ""}
  </React.Fragment>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  productTitle: PropTypes.string
};

export default Product;
