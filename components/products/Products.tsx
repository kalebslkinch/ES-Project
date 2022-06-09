import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import TransitionProducts from '../transitions/TransitionProducts';
import Plus from '../svg/Plus';
import Minus from '../svg/Minus';
import Image from 'next/image';
import { Col, Row } from '../EasyComponents/Flex';

interface ProductsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}
const Products: FC<ProductsProps> = ({
  id,
  title,
  description,
  image,
  price,
}) => {
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [counter, setCounter] = useState(0);

  // Refresh Router
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath, router.asPath, { scroll: false });
  };

  // Put item data into an object
  const itemData = { id, title, description, image, price, quantity: 1 };

  // Check if in cart
  useEffect(() => {
    const cart = 'cart';
    if (cookie.get(cart) === undefined) {
    } else {
      const storedData = JSON.parse(cookie.get(cart));

      const titles = storedData.map((data) => data.title);

      if (titles.includes(title)) {
        if (storedData[titles.indexOf(title)].quantity <= 0) {
          setAlreadyDone(false);
          handleRemove();
          refreshData();
        } else {
          setAlreadyDone(true);
          setQuantity(storedData[titles.indexOf(title)].quantity);
          refreshData();
        }
      } else {
        setAlreadyDone(false);
        refreshData();
      }
    }
  }, [counter]);

  // For removing from an Array
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  // Remove from Cart
  const handleRemove = () => {
    const cart = 'cart';

    // Get items from the local storage
    const getItems = JSON.parse(cookie.get(cart));

    // Get the tiltes from the array
    const titles = getItems.map((data) => data.title);

    // Index of the items
    const index = titles.indexOf(title);
    const newCart = arrayRemove(getItems, getItems[index]);

    // Add back to the local storage
    cookie.set(cart, newCart);

    refreshData();
  };

  // Decrease quantity amount
  const handleDecrease = () => {
    const cart = 'cart';
    const items = {
      id,
      title,
      description,
      image,
      price,
      quantity,
    };

    const stringGetItems = cookie.get(cart);
    const getItems = JSON.parse(cookie.get(cart));

    const titles = getItems.map((data) => data.title);
    if (stringGetItems[titles.indexOf(title)].quantity - 1 <= 0) {
      handleRemove();
      setAlreadyDone(false);
      refreshData();
    } else {
      const newCart = stringGetItems.replace(
        JSON.stringify(items),
        JSON.stringify({ ...items, quantity: quantity - 1 })
      );
      cookie.set(cart, newCart);
      refreshData();
    }

    refreshData();
  };

  // Empty Array
  const handleCart = () => {
    const cart = 'cart';
    if (cookie.get(cart) === undefined) {
      cookie.set(cart, [itemData]);
      setAlreadyDone(true);
      refreshData();
    } else {
      const storedData = JSON.parse(cookie.get(cart));
      const stringGetItems = cookie.get(cart);
      const items = {
        id,
        title,
        description,
        image,
        price,
        quantity,
      };
      const titles = storedData.map((data) => data.title);

      if (titles.includes(title)) {
        const newCart = stringGetItems.replace(
          JSON.stringify(items),
          JSON.stringify({ ...items, quantity: quantity + 1 })
        );
        setCounter(counter + 1);
        cookie.set(cart, JSON.parse(newCart));
        refreshData();
      } else {
        const addData = [...storedData, itemData];
        cookie.set(cart, addData);
        setAlreadyDone(true);
        refreshData();
      }
    }
  };

  return (
    <>
      <Col className='my-2 h-auto overflow-hidden rounded-lg bg-white shadow-2xl xl:w-[280px] '>
        <TransitionProducts>
          <Col>
            {/* Product Info Wrapper */}
            <h3 className='h-[55px] overflow-hidden px-4 pt-3 text-[1.8rem] font-bold capitalize text-gray-700'>
              {title}
            </h3>
            {/* Description */}
            <p className='text-md overflow-hidden px-4 pt-1 text-gray-600 sm:h-[80px]'>
              {description}
            </p>
          </Col>
          {/* Image Link */}
          <Link href={`/${id}`}>
            {/* Image */}
            <button className='relative mt-2 flex h-48 w-full focus:outline-none'>
              <Image className='' src={image} layout='fill' objectFit='cover' />
            </button>
          </Link>

          {/* Price and Quantity Wrapper */}
          <Row className='itemData-center flex justify-between bg-gray-900 px-4 py-2'>
            {/* Price */}
            {parseFloat(price) >= 1 ? (
              <>
                <h1 className='text-xl font-bold text-gray-200'>
                  £ {parseFloat(price).toFixed(2)}
                </h1>
              </>
            ) : (
              <>
                <h1 className='text-xl font-bold text-gray-200'>
                  {parseFloat(price).toFixed(2).slice(-2)}p
                </h1>
              </>
            )}

            {/* Add to Bag Button */}
            {!alreadyDone && (
              <button
                onClick={handleCart}
                className='rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none'
              >
                Add to bag
              </button>
            )}

            {/* Quantity */}
            {alreadyDone && (
              <div
                onClick={handleCart}
                className={`flex flex-row  rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-900 focus:animate-addToBag focus:outline-none`}
              >
                <span>{quantity}</span>

                {/* Minus Button */}
                <button
                  disabled={quantity <= 0}
                  onClick={handleDecrease}
                  className='my-auto ml-3'
                >
                  <Minus className='my-auto h-5 w-5' />
                </button>

                {/* Plus Button */}
                <button onClick={handleCart} className='my-auto ml-1'>
                  <Plus className=' h-5 w-5' />
                </button>
              </div>
            )}
          </Row>
        </TransitionProducts>
      </Col>
    </>
  );
};

export default Products;
