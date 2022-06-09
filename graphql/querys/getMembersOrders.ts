import { gql } from '@apollo/client';

const GET_MEMBERS_ORDERS = gql`
  query ($customerID: String!) {
    allMembersOrders(customerID: $customerID) {
      data {
        customerID
        quantity
        customerInfo
        paypalInfo
        productOrderInfo
        shippingInformation
        cost
        date
        completed
        time
      }
    }
  }
`;

export default GET_MEMBERS_ORDERS;
