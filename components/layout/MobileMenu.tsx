import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import Menu from '../svg/Menu';

import Boxes from '../svg/Boxes';
import Sweets from '../svg/Sweets';
import Bag from '../svg/Bag';
import Mailing from '../svg/Mailing';
import NiceLogin from '../svg/NiceLogin';
import NiceLogout from '../svg/NiceLogout';
import NiceUser from '../svg/NiceUser';
import Orders from '../svg/Orders';
import { useRouter } from 'next/router';

const MobileMenu = () => {
  // Temporary User 
  const user = false

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClick = (location) => {
    router.push(`/${location}`);
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className='relative '>
          <button
            onClick={handleOpen}
            className={`${
              !open ? 'text-blue-500' : 'text-pink-500'
            }   inline-flex items-center justify-center rounded-md p-2 pr-2  text-white  focus:outline-none `}
          >
            <Menu size='h-12 w-12' />
          </button>
          {!open ? (
            <></>
          ) : (
            <div className='-mbg-gray-800 absolute right-0 z-40 w-56 -translate-y-2 transform animate-fadein  border bg-white p-0.5 py-2  px-6  shadow-xl'>
              <div className='group flex'>
                <button onClick={() => handleClick('shopping')}>
                  <Sweets className='h-8 w-8 group-hover:animate-bounce' />
                </button>
                <button onClick={() => handleClick('shopping')}>
                  <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                    Shopping
                  </div>
                </button>
              </div>
              <div className='group flex'>
                <button onClick={() => handleClick('snackbox')}>
                  <Boxes className='h-8 w-8 group-hover:animate-bounce' />
                </button>
                <button onClick={() => handleClick('snackbox')}>
                  <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                    Snaxx Boxes
                  </div>
                </button>
              </div>

              <div className='group flex'>
                <button onClick={() => handleClick('contact-us')}>
                  <Mailing className='h-8 w-8 group-hover:animate-bounce' />
                </button>
                <button onClick={() => handleClick('contact-us')}>
                  <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                    Contact Us
                  </div>
                </button>
              </div>
              <div className='group flex'>
                <Bag className='h-8 w-8 group-hover:animate-bounce' />
                <button onClick={() => handleClick('checkout1')}>
                  <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                    Shopping Bag
                  </div>
                </button>
              </div>
              {!user ? (
                <>
                  <div className='group flex'>
                    <button onClick={() => handleClick('login')}>
                      <NiceLogin className='h-8 w-8 group-hover:animate-bounce' />
                    </button>
                    <button onClick={() => handleClick('login')}>
                      <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                        Login
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className='group flex'>
                    <NiceUser className='h-8 w-8 group-hover:animate-bounce' />
                    <button onClick={() => handleClick('my-profile')}>
                      <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                        My Account
                      </div>
                    </button>
                  </div>
                  <div className='group flex'>
                    <Orders className='h-8 w-8 group-hover:animate-bounce' />

                    <button onClick={() => handleClick('orders')}>
                      <div className='-mtext-gray-300 -m block transform px-4 py-2 text-sm capitalize text-gray-700  transition-colors    duration-200'>
                        Orders
                      </div>
                    </button>
                  </div>
                  <div className='group flex'>
                    <NiceLogout className='h-8 w-8 group-hover:animate-bounce' />
                    <button onClick={() => handleClick('logout')}>
                      <button
                        onClick={handleClickAway}
                        className='-mtext-gray-300 block transform px-4 py-2 text-sm capitalize text-gray-700 transition-colors  duration-200'
                      >
                        Logout
                      </button>
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default MobileMenu;
