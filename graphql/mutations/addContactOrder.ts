import { gql } from '@apollo/client';

export const ADD_CONTACT_ORDER = gql`
  mutation AddContactOrder($data: ContactOrderInput!) {
    createContactOrder(data: $data) {
      name
      email
      budgetAmount
      prefferedDate
      message
      date
    }
  }
`;
