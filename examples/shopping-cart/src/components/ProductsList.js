import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ProductListContainer = styled("div")`
  margin: 17px;
`;
ProductListContainer.displayName = "ProductListContainer";

const ProductsList = ({ children }) => (
  <ProductListContainer>
    <div>{children}</div>
  </ProductListContainer>
);

ProductsList.propTypes = {
  children: PropTypes.node
};

export default ProductsList;
