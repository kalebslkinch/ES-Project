export interface CustomerOrder {
  customerID: string;
  customerInfo: Object;
  quantityAmount: string;
  totalAmount: string;
  payer_id: string;
  email_address: string;
  billingDetails: Object;
  productOrderInfo: string;
}
