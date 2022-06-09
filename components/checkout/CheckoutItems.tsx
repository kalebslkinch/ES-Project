import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import Plus from '../svg/Plus';
import Minus from '../svg/Minus';
import Link from 'next/link';
const CheckoutItems = ({ title, description, price, image, quantity, id }) => {
  // Router
  const router = useRouter();

  // Refresh Router
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // Put into object
  const items = {
    id,
    title,
    description,
    image,
    price,
    quantity,
  };

  const newPrice = quantity * price;

  const cart = 'cart';
  // Get items from the local storage
  const stringGetItems = cookie.get(cart);
  const getItems = JSON.parse(cookie.get(cart));

  // Get the tiltes from the array
  const titles = getItems.map((data) => data.title);

  // Index of the items
  const index = titles.indexOf(title);

  // For removing from an Array
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  // Remove from Cart
  const handleRemove = () => {
    const newCart = arrayRemove(getItems, getItems[index]);

    // Add back to the local storage
    cookie.set(cart, newCart);

    refreshData();
  };

  // Increase quantity amount
  const handleIncrease = () => {
    const newCart = stringGetItems.replace(
      JSON.stringify(items),
      JSON.stringify({ ...items, quantity: quantity + 1 })
    );

    cookie.set(cart, JSON.parse(newCart));
    refreshData();
  };

  // Decrease quantity amount
  const handleDecrease = () => {
    const newCart = stringGetItems.replace(
      JSON.stringify(items),
      JSON.stringify({ ...items, quantity: quantity - 1 })
    );
    cookie.set(cart, newCart);
    refreshData();
  };

  // When quantity is less than 1 it removes it from the local strorage
  if (quantity < 1) {
    handleRemove();
  }

  return (
    <>
      <tbody>
        <tr>
          <td className='  border-b border-gray-200 bg-white px-5  py-5 text-sm'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href={`/${id}`}>
                  <a className='relative block'>
                    <img
                      alt='profile'
                      src={image}
                      className='mx-auto h-10  w-10 object-cover '
                    />
                  </a>
                </Link>
              </div>
              <div className='ml-3'>
                <p className='whitespace-no-wrap overflow-hidden truncate text-gray-900'>
                  {title}
                </p>
              </div>
            </div>
          </td>
          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
            <p className='whitespace-no-wrap overflow-hidden truncate text-gray-900'>
              {description}
            </p>
          </td>
          <td className='border-b  border-gray-200 bg-white px-5 py-5  text-sm'>
            <p className='whitespace-no-wrap text-gray-900'>
              {' '}
              {price >= 1 ? (
                <> £{parseFloat(price).toFixed(2)} </>
              ) : (
                <>{parseFloat(price).toFixed(2).toString().slice(-2)}p</>
              )}
            </p>
          </td>

          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
            <p className='flex justify-center text-gray-900 '>{quantity}</p>
          </td>

          <td className='animate-quantityfadein flex border-b border-gray-200 bg-white  px-5 py-8 '>
            <button
              className='pl-1 focus:outline-none'
              onClick={handleDecrease}
            >
              <Minus className='h-4 w-4' />
            </button>
            <button
              className='pl-1 focus:outline-none'
              onClick={handleIncrease}
            >
              <Plus className='h-4 w-4' />
            </button>
          </td>
          <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
            <p className='whitespace-no-wrap flex justify-center text-gray-900'>
              {newPrice >= 1 ? (
                <> £{newPrice.toFixed(2)} </>
              ) : (
                <>{newPrice.toFixed(2).toString().slice(-2)}p</>
              )}
            </p>
          </td>
          <td className='border-b border-gray-200  bg-white px-5 py-5 text-sm'>
            <span className='static   px-3 py-1 font-semibold leading-tight text-green-900'>
              <button
                onClick={handleRemove}
                className='transform rounded-full bg-gray-300 px-2 py-2 text-red-800 transition delay-100 duration-300 hover:bg-gray-400 focus:outline-none'
              >
                Remove
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CheckoutItems;
