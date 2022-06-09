import { BillingDetails } from './billingdetails';
import { CustomerInfo } from './customerinfo';

export interface CheckoutForm {
  customerID: string;
  customerInfo: CustomerInfo;
  quantityAmount: string;
  totalAmount: number;
  billingDetails: BillingDetails;
  productOrderInfo: string;
}
