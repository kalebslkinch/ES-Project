import cookie from 'js-cookie';
import { FC } from 'react';

import { CustomerInfo } from '../../utils/types/customerinfo';

interface CompletedOrderProps {
  customerInfo: CustomerInfo;
  quantityAmount: string;
  totalAmount: number;
  payerID: string;
  paypalEmail: string;
  paypalInfo?: String;
}

const CompletedOrder: FC<CompletedOrderProps> = ({
  quantityAmount,
  totalAmount,
  payerID,
  paypalEmail,
  customerInfo,
  paypalInfo,
}) => {
  

  const { firstName, surName, customerEmail } = customerInfo;

  cookie.remove('cart');

  return (
    <div className='align-items-center min-w-4xl black flex flex-col border'>
      {firstName} {surName}
      <h1 className=''>You order is now Complete!</h1>
      <h3>Customer Email: {customerEmail}</h3>
      <h3>Total Quantity: {quantityAmount}</h3>
      <h3>Total Cost: £{totalAmount.toFixed(2)}</h3>
      <h3>Paypal Payer ID: {payerID}</h3>
      <h3>Paypal Email: {paypalEmail}</h3>
    </div>
  );
};

export default CompletedOrder;
