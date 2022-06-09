import { gql } from '@apollo/client';

const GET_PRODUCTS_AVAILABLE = gql`
  query GetProductsAvailable {
    allProductsAvailable {
      data {
        _id
        title
        description
        image
        price
      }
    }
  }
`;

export default GET_PRODUCTS_AVAILABLE;
