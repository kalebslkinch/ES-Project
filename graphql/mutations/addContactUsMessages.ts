import { gql } from '@apollo/client';

export const ADD_CONTACT_US = gql`
  mutation AddContactUs($data: ContactUsInput!) {
    createContactUs(data: $data) {
      name
      email
      message
    }
  }
`;
