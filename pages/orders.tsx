import OrdersItems from '../components/orders/OrdersItems';
import { useQuery } from '@apollo/client';
import GET_MEMBERS_ORDERS from '../graphql/querys/getMembersOrders';
import Loading from '../components/Loading';

const Orders = ({ user }) => {
  const { data, loading, error } = useQuery(GET_MEMBERS_ORDERS, {
    variables: { customerID: user ? user.id : null },
  });

  if (user) {
    if (loading) return <Loading />;
    if (error) {
      alert(error.message);
    }

    return (
      <>
        <div className='max-w-screen mt-10 flex w-full justify-center pt-4 pb-8 '>
          <span className='text-bold text-4xl text-gray-800'>Orders</span>
        </div>
        <div className='sm:max-w-screen absolute z-10 w-full  overflow-scroll md:justify-center md:overflow-auto'>
          <div>
            <table className='w-full max-w-full '>
              <thead className='justify-between'>
                <tr className='z-0 bg-gray-800'>
                  <th className='px-8 py-2'>
                    <span className='text-center text-gray-300'>
                      Check Order
                    </span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Shipped</span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Delivery Tracking</span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>No. of Items</span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Amount</span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Shipping Cost</span>
                  </th>
                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Total Amount</span>
                  </th>

                  <th className='px-8  py-2'>
                    <span className='text-gray-300'>Date</span>
                  </th>
                </tr>
              </thead>

              {data.allMembersOrders.data.map((data) => (
                <OrdersItems
                  numberOfItems={data.quantity}
                  amount={data.cost}
                  shippingCost={4.5}
                  date={data.date}
                  completed={data.completed}
                  shippingInformation={data.shippingInformation}
                  productOrderInfo={
                    data.productOrderInfo === 'snackbox'
                      ? data.productOrderInfo
                      : JSON.parse(data.productOrderInfo)
                  }
                />
              ))}
            </table>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Orders;
