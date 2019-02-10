import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increaseCartQuantity } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import CartLink from "../components/CartLink";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import breakpoints from "../styles/breakpoints";

const HeaderWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 30px 18px 21px;
  position: relative;
  padding-bottom: 22px;
  flex-wrap: wrap;

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
    margin: 43px 17px 25px;
    padding-bottom: 25px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin: 55px 17px 29px;
    padding-bottom: 34px;

    &:after {
    }
  }
`;

const StoreTitle = styled("span")`
  font-size: 28px;
  color: ${colors.darkgray};
  display: block;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}px) {
    width: auto;
    font-size: 38px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 51px;
  }
`;

const ProductsContainer = ({ products, increaseCartQuantity }) => (
  <React.Fragment>
    <HeaderWrapper>
      <StoreTitle>Acme Store</StoreTitle>
      <CartLink />
    </HeaderWrapper>
    <ProductsList>
      {products.map(product => (
        <div key={product.id}>
          <ProductItem
            product={product}
            onAddToCartClicked={() => increaseCartQuantity(product.id)}
          />
        </div>
      ))}
    </ProductsList>
  </React.Fragment>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productTitle: PropTypes.string.isRequired,
      price: PropTypes.object.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  increaseCartQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { increaseCartQuantity }
)(ProductsContainer);
