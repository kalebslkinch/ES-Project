import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation CustomersOrders($data: CustomersOrdersInput!) {
    createCustomersOrders(data: $data) {
      customerID
      customerInfo
      shippingInformation
      paypalInfo
      quantity
      cost
      date
      time
      completed
    }
  }
`;
