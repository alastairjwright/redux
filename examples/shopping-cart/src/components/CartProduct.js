import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";
import colors from "../styles/colors";

const ProductContainer = styled("div")`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.horizontalRuleGray};

  @media (min-width: ${breakpoints.tablet}px) {
    width: 100%;
    position: relative;
  }
`;

const ProductDetailsContainer = styled("div")`
  display: flex;
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

const ProductRightContainer = styled("div")`
  margin-left: 14px;
  font-size: 16px;
  width: 100%;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${breakpoints.tablet}px) {
    width: calc(60% - 14px);
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TitleSpan = styled("span")`
  font-size: 21px;
  width: 100%;
  margin-bottom: 5px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 28px;
    width: 50%;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 34px;
  }
`;

const PriceSpan = styled("span")`
  font-size: 16px;
  width: 100%;
  flex-grow: 1;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 21px;
    width: 50%;
    text-align: right;
  }
`;

const RemoveButton = styled("button")`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #cc1d39;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 100%;
    text-align: left;
  }
`;

const QuantityControls = styled("div")`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  height: 40px;

  @media (min-width: ${breakpoints.tablet}px) {
    position: absolute;
    bottom: 20px;
    left: calc(40% + 14px);
    width: 300px;
  }
`;

const QuantityButton = styled("button")`
  background-color: ${colors.closeCrossGray};
  border: 1px solid ${colors.closeCrossGray};
  border: none;
  outline: none;
  cursor: pointer;
  width: 95px;
  text-align: center;
  color: ${colors.quantityButtonText};
  font-size: 30px;
  padding: 0 0 4px 0;

  &:hover:not(:disabled) {
    background-color: ${colors.blue};
    border: 1px solid ${colors.blue};
    color: ${colors.white};
  }

  &:disabled {
    background-color: ${colors.disabledButtonGray};
    cursor: default;
    color: ${colors.quantityButtonTextDisabled};
  }
`;

const QuantitySpan = styled("span")`
  border-top: 1px solid ${colors.quantityOutline};
  border-bottom: 1px solid ${colors.quantityOutline};
  flex-grow: 1;
  text-align: center;
  padding: 10px;
  font-size: 14px;
`;

const Product = ({
  price,
  quantity,
  title,
  id,
  inventory,
  onRemoveFromCartClicked,
  onDecreaseQuantityClicked,
  onIncreaseQuantityClicked
}) => (
  <ProductContainer>
    <ProductDetailsContainer>
      <ProductImageContainer>
        <ProductImage src={`/images/product_${id}.jpg`} alt={title} />
      </ProductImageContainer>
      <ProductRightContainer>
        <TitleSpan>{title}</TitleSpan>
        <PriceSpan>${price}</PriceSpan>
        <RemoveButton onClick={onRemoveFromCartClicked}>Remove</RemoveButton>
      </ProductRightContainer>
    </ProductDetailsContainer>
    <QuantityControls>
      <QuantityButton
        onClick={onDecreaseQuantityClicked}
        disabled={quantity > 0 ? "" : "disabled"}
      >
        -
      </QuantityButton>
      <QuantitySpan>{quantity}</QuantitySpan>
      <QuantityButton
        onClick={onIncreaseQuantityClicked}
        disabled={inventory > 0 ? "" : "disabled"}
      >
        +
      </QuantityButton>
    </QuantityControls>
  </ProductContainer>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number,
  inventory: PropTypes.number.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onDecreaseQuantityClicked: PropTypes.func.isRequired,
  onIncreaseQuantityClicked: PropTypes.func.isRequired
};

export default Product;
