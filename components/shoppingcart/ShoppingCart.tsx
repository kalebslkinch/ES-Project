import React, { FC, MouseEvent, MouseEventHandler } from 'react';
import ShoppingCartItems from './ShoppingCartItems';
import Link from 'next/link';
import cookie from 'js-cookie';
import ClickAwayListener from 'react-click-away-listener';
import { Row } from '../EasyComponents/Flex';

interface ShoppingCartProps {
  toggleShoppingBag: () => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ toggleShoppingBag }) => {
  const cart = 'cart';
  if (cookie.get(cart) === undefined) {
    return <></>;
  } else {
    const getStorage = JSON.parse(cookie.get(cart));
    if (getStorage.length > 0) {
      const totalAmount = getStorage
        .map((data) => data.quantity * data.price)
        .reduce((a, b) => a + b);

      return (
        <>
          <div className='fixed z-40'>
            <ClickAwayListener onClickAway={toggleShoppingBag}>
              <div className='flex justify-end'>
                <div className='relative'>
                  <div className='absolute w-full rounded-b border-t-0 '>
                    <div className='w-64 space-y-1 shadow-xl'>
                      {getStorage.map((data) => (
                        <Row className='flex animate-fadein cursor-pointer bg-white bg-gradient-to-r p-2 hover:from-pink-400 hover:via-green-300 hover:to-blue-400'>
                          <ShoppingCartItems
                            id={data.id}
                            title={data.title}
                            description={data.description}
                            price={data.price}
                            image={data.image}
                            quantity={data.quantity}
                          />
                        </Row>
                      ))}
                      <div className='group'>
                        <div className='hover:bg-gradient flex animate-shoppingBagfadein justify-center bg-white bg-gradient-to-r p-4 group-hover:from-blue-400 group-hover:via-green-300 group-hover:to-pink-400'>
                          <button
                            onClick={toggleShoppingBag}
                            className='flex justify-center rounded border border-gray-800 px-4 py-2 text-base font-bold text-gray-800 duration-200 hover:scale-110 hover:border-pink-400 hover:bg-opacity-100 hover:text-white focus:outline-none'
                          >
                            <Link href='/checkout1'>
                              <a className='animate-fadein'>
                                Checkout{' '}
                                {totalAmount >= 1 ? (
                                  <> £{totalAmount.toFixed(2)} </>
                                ) : (
                                  <>
                                    {totalAmount
                                      .toFixed(2)
                                      .toString()
                                      .slice(-2)}
                                    p
                                  </>
                                )}
                              </a>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ClickAwayListener>
          </div>
        </>
      );
    } else return <></>;
  }
};

export default ShoppingCart;
