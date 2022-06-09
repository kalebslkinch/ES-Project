import { gql } from '@apollo/client';

const GET_PRODUCTS_BY_ID = gql`
  query ($id: ID!) {
    findProductsAvailableByID(id: $id) {
      _id
      title
      description
      image
      price
    }
  }
`;

export default GET_PRODUCTS_BY_ID;
