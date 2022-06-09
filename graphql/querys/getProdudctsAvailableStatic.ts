import { gql } from '@apollo/client';

const GET_PRODUCTS_AVAILABLE_STATIC = gql`
  query ($title: String!) {
    findProductsAvailableByTitle(title: $title) {
      _id
      title
      description
      image
      price
    }
  }
`;

export default GET_PRODUCTS_AVAILABLE_STATIC;
