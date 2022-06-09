import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TransitionOpac from '../transitions/TransitionOpac';
import TransitionWidth from '../transitions/TransitionWidth';
import { Cart } from '../../utils/types/cartItem';

export default function ShoppingCartItemMock({
  id,
  title,
  description,
  image,
  price,
  quantity,
  cookie,
}) {
  // Router
  const router = useRouter();

  // Refresh Router
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // Put into object
  const items: Cart = {
    id,
    title,
    description,
    image,
    price,
    quantity,
  };

  const newPrice = quantity * price;

  const cart = 'cart';

  const [getItems, setGetItems] = useState([]);
  // Get items from the local storage
  const stringGetItems = cookie;
  useEffect(() => {
    setGetItems(JSON.parse(cookie));
  }, [setGetItems]);

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
    setGetItems(newCart);

    refreshData();
  };

  // Increase quantity amount
  const handleIncrease = () => {
    const newCart = stringGetItems.replace(
      JSON.stringify(items),
      JSON.stringify({ ...items, quantity: quantity + 1 })
    );

    setGetItems(newCart);
    refreshData();
  };

  // Decrease quantity amount
  const handleDecrease = () => {
    const newCart = stringGetItems.replace(
      JSON.stringify(items),
      JSON.stringify({ ...items, quantity: quantity - 1 })
    );
    refreshData();
  };

  // When quantity is less than 1 it removes it from the local strorage
  if (quantity < 1) {
    handleRemove();
  }

  return (
    <>
      <div className='w-12 p-2'>
        <TransitionOpac>
          <img src={image} alt='img product' />
        </TransitionOpac>
      </div>
      <div className='w-32 flex-auto text-sm'>
        <TransitionWidth>
          <div className='font-bold text-gray-800'>{title}</div>
          <div className='truncate text-gray-800'>{description}</div>
          <div className='animate-quantityfadein flex text-gray-800 '>
            Qty: {quantity}
            <button
              className='pl-1 focus:outline-none'
              onClick={handleDecrease}
            >
              Minus
              {/* <Minus className="h-4 w-4" /> */}
            </button>
            <button
              className='pl-1 focus:outline-none'
              onClick={handleIncrease}
            >
              Plus
              {/* <Plus className="h-4 w-4" /> */}
            </button>
          </div>
        </TransitionWidth>
      </div>
      <div className='w-18 flex animate-shoppingBagfadein flex-col items-end font-medium'>
        <div className='mb-6 h-4 w-4  cursor-pointer rounded-full text-red-700'>
          <button className='focus:outline-none' onClick={handleRemove}>
            {/* <Trash className="feather feather-trash-2 " /> */}
            Trash
          </button>
        </div>
        {newPrice >= 1 ? (
          <> £{newPrice.toFixed(2)} </>
        ) : (
          <>{newPrice.toFixed(2).toString().slice(-2)}p</>
        )}
      </div>
    </>
  );
}
