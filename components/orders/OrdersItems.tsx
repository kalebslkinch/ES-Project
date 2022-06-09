import { FC, useState } from 'react';
import { Col } from '../EasyComponents/Flex';
import OrderProductInfo from './OrderProductInfo';
import Check from '../svg/Check';
import Cross from '../svg/Cross';

interface OrdersItemsProps {
  shippingCost: number;
  amount: string;
  date: string;
  completed: string;
  numberOfItems: string;
  shippingInformation: string;
  productOrderInfo: string;
}
const OrdersItems: FC<OrdersItemsProps> = ({
  shippingCost,
  amount,
  date,
  completed,
  numberOfItems,
  shippingInformation,
  productOrderInfo,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <tbody className='rounded-lg bg-gray-200 '>
        <tr className='bg-white '>
          <td className='flex-box items-center px-5 py-2'>
            {productOrderInfo === 'snackbox' ? (
              <h2 className='text-center'>Snack Box</h2>
            ) : (
              // Open Button
              <button
                onClick={handleOpen}
                className='transition-400 mx-auto flex transform rounded-lg border bg-gray-800 px-2 py-2 text-white transition delay-200 hover:bg-gray-900'
              >
                Open
              </button>
            )}
          </td>
          <td className='px-5 py-2'>
            {/* Shipping */}
            <div className='flex justify-center'>
              {completed ? (
                <Col className='justify-center'>
                  {shippingInformation === '' ? (
                    <></>
                  ) : (
                    <>
                      <div className='px-5'>
                        {JSON.parse(shippingInformation).date}
                      </div>
                      <div className='flex justify-center px-5'>
                        <Check className='h-6 w-6' />
                      </div>
                    </>
                  )}
                </Col>
              ) : (
                <>
                  <Cross className='h-6 w-6' />
                </>
              )}
            </div>
          </td>
          {/* Delivery Tracking */}
          <td className='px-5 py-2'>
            <div className='flex justify-center'>
              {shippingInformation === '' ? (
                <Cross className='h-6 w-6' />
              ) : (
                JSON.parse(shippingInformation).deliveryTracking
              )}
            </div>
          </td>
          {/* Number of Items */}
          <td className='px-5 py-2'>
            <span className='flex justify-center'>{numberOfItems}</span>
          </td>
          {/* Amount */}
          <td className='px-5 py-2'>
            <span className='flex justify-center'>£{amount}</span>
          </td>
          {/* Shipping Cost */}
          <td className='px-5 py-2'>
            <span className='flex justify-center'>£{shippingCost}</span>
          </td>
          {/* Total amount */}
          <td className='px-5 py-2'>
            <span className='flex justify-center'>
              £{(parseFloat(amount) + shippingCost).toFixed(2)}
            </span>
          </td>
          {/* Date */}
          <td className='px-5 py-2'>
            <span className='flex justify-center'>{date}</span>
          </td>
        </tr>
      </tbody>
      {open ? (
        <OrderProductInfo
          productOrderInfo={productOrderInfo}
          handleOpen={handleOpen}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default OrdersItems;
