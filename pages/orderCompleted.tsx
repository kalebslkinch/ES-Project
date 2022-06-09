import cookie from 'js-cookie';

import CryptoJS from 'crypto-js';
import Link from 'next/link';
import { FSRow } from '../components/EasyComponents/FScreen';
import { Col } from '../components/EasyComponents/Flex';
import { CustomerInfo } from '../utils/types/customerinfo';
import { OrderDone } from '../utils/types/orderdone';

const CompletedOrder = () => {
  // Router

  // Refresh Router

  if (typeof cookie.get('orderDetails') === 'string') {
    // Decrypt
    const encryptedData = JSON.parse(cookie.get('orderDetails')).encryptedData;
    let bytesOrderDoneData = CryptoJS.AES.decrypt(
      encryptedData,
      `${process.env.SECRET_KEY}`
    );
    // Decrypt
    let orderDone = JSON.parse(bytesOrderDoneData.toString(CryptoJS.enc.Utf8));

    const { customerInfo, quantityAmount, totalAmount }: OrderDone = orderDone;

    const {
      firstName,
      surName,
      address,
      postCode,
      customerEmail,
    }: CustomerInfo = customerInfo;

    cookie.remove('cart');

    return (
      <FSRow className='mt-10 justify-center'>
        <Col className='max-w-md space-y-4 rounded-lg border border-black bg-gray-800 py-6 px-6 text-lg text-white md:mt-20'>
          <h1 className='text-center text-xl'>{`${firstName} ${surName}`}</h1>
          <p className='text-md'>Your order is now Complete! </p>
          <h3>Customer Email: {customerEmail}</h3>
          <h3>Customer Address: {address}</h3>
          <h3>Post Code: {postCode}</h3>
          <h3>Total Quantity: {quantityAmount}</h3>
          <h3>Total Cost: £{totalAmount.toFixed(2)}</h3>
          <Link href='/'>
            <button className='mx-auto rounded-lg border py-2 px-1'>
              Return Home
            </button>
          </Link>
        </Col>
      </FSRow>
    );
  } else {
    return <></>;
  }
};

export default CompletedOrder;
