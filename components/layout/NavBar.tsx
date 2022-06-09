import ProfileSection from './ProfileSection';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { useUser } from '../../lib/firebase/useUser';
import UserCircle from '../svg/UserCircle';

import ShoppingBag from '../svg/ShoppingBag';
import MobileMenu from './MobileMenu';
import { FSRow } from '../EasyComponents/FScreen';
import ShoppingSection from './ShoppingSection';
// Styles
const icons = 'group-hover:animate-bounce w-6 w-6';
const transition =
  'transition  duration-1000 delay-100 ease-in-out  transform  hover:scale-110';
const topButtonsStyle = `rounded-md px-6 py-1 text-gray-800 focus:outline-none   ${transition}  bg-gradient-to-r  hover:from-pink-400 hover:via-green-300 hover:to-blue-400`;
const topButtonsLinkStyle = 'text-gray-800 text-lg ';

const NavBar = () => {
  // Get the products from the local storage
  const { user } = useUser();
  // States

  const [openShop, setOpenShop] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openShoppingBag, setOpenShoppingBag] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Event Listeners

  // Handle Click away
  const handleProfileClickAway = () => {
    setOpenProfileMenu(false);
  };
  const handleShoppingClickAway = () => {
    setOpenShop(false);
  };

  // Toggle the Shop Menu
  const toggleOnShop = () => {
    setOpenShop((prev) => !prev);
    setOpenProfileMenu(false);
    setOpenShoppingBag(false);
  };

  // Toggle the Profile Menu
  const toggleProfileMenu = () => {
    setOpenProfileMenu((prev) => !prev);
    setOpenShop(false);
    setOpenShoppingBag(false);
  };

  // Toggle the Shopping Bag closed and open
  const toggleShoppingBag = () => {
    setOpenShoppingBag((prev) => !prev);
    setOpenProfileMenu(false);
    setOpenShop(false);
  };

  const handleCloseAll = () => {
    setOpenShoppingBag(false);
    setOpenProfileMenu(false);
    setOpenShop(false);
  };

  const handleshowMessage = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(true);
    }, 3000);
  };

  // Logout

  return (
    <FSRow className='z-50'>
      <nav className='flex flex-row justify-center bg-white py-2'>
        <div className='w-screen sm:px-4 '>
          <div className='flex h-8 items-center justify-between '>
            <div className='flex  w-full items-center'>
              <div className='hide-mobile max w-full md:block'>
                <div className='ml-6 flex w-full items-center'>
                  {/* Logo */}
                  <div className='w-1/8 flex h-full items-center '>
                    <button className='flex focus:outline-none '>
                      <Link href='/'>
                        <Image
                          src='/Exotic_snax.jpg'
                          alt='Logo'
                          height={48}
                          width={48}
                        />
                      </Link>
                    </button>
                  </div>

                  <div className='mx-auto flex flex-row justify-center'>
                    {/* Home */}
                    <button
                      className={topButtonsStyle}
                      onClick={handleCloseAll}
                    >
                      <Link href='/'>
                        <div className={topButtonsLinkStyle}>Home</div>
                      </Link>
                    </button>

                    {/* Shopping */}
                    <div className={`topButtonsLinkStyle ${transition} `}>
                      <ShoppingSection
                        topButtonsStyle={topButtonsStyle}
                        toggleOnShop={toggleOnShop}
                        topButtonsLinkStyle={topButtonsLinkStyle}
                        openShop={openShop}
                        handleShoppingClickAway={handleShoppingClickAway}
                      />
                    </div>

                    {/* Contact Us */}
                    <button
                      className={topButtonsStyle}
                      onClick={handleCloseAll}
                    >
                      <Link href='/contact-us'>
                        <div className={topButtonsLinkStyle}>Contact us</div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='hidden md:block'>
                {/* Profile */}
                <div className='ml-4 flex items-center space-x-2 md:ml-6'>
                  <div className='group'>
                    <button
                      onClick={toggleProfileMenu}
                      className='rounded-full p-1 focus:outline-none'
                    >
                      <UserCircle className='h-8 w-8 group-hover:animate-slowbounce' />
                    </button>
                  </div>
                  <div className='group'>
                    {/* Shopping Bag */}
                    <button
                      onClick={toggleShoppingBag}
                      className='rounded-full  p-1  focus:outline-none'
                    >
                      <ShoppingBag className='h-8 w-8 group-hover:animate-slowbounce' />
                    </button>
                  </div>
                  {openProfileMenu === true ? (
                    <ProfileSection
                      handleProfileClickAway={handleProfileClickAway}
                      user={user}
                      icons={icons}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <FSRow className='hide absolute z-40 justify-center'>
              <button className='mx-auto mt-1 w-screen pl-12 focus:outline-none'>
                <Link href='/'>
                  <Image
                    src='/Exotic_snax.jpg'
                    alt='Picture of the author'
                    width={50}
                    height={50}
                  />
                </Link>
              </button>
              <div className='translate ml-auto flex'>
                <MobileMenu />
              </div>
            </FSRow>
          </div>
        </div>
      </nav>
      {/* Open Shopping Bag */}
      {openShoppingBag === true ? (
        <>
          <div className='absolute top-12 right-[258px]'>
            <ShoppingCart toggleShoppingBag={toggleShoppingBag} />
            <div className='pr-1' />
          </div>
        </>
      ) : null}
    </FSRow>
  );
};

export default NavBar;
