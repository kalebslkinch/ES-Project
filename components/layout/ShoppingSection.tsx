import Link from 'next/link';
import ClickAwayListener from 'react-click-away-listener';
import Boxes from '../svg/Boxes';
import Down from '../svg/Down';
import Sweets from '../svg/Sweets';
import Up from '../svg/Up';

const ShoppingSection = ({
  topButtonsStyle,
  toggleOnShop,
  topButtonsLinkStyle,
  openShop,
  handleShoppingClickAway,
}) => {
  return (
    <ClickAwayListener onClickAway={handleShoppingClickAway}>
      <button className={`${topButtonsStyle}`} onClick={toggleOnShop}>
        <div>
          <div className={`flex justify-center ${topButtonsLinkStyle} `}>
            Shopping
            <div className='flex pt-2'>
              {!openShop ? (
                <Up className='h-3 w-3 animate-otherhalfspin' />
              ) : (
                <Down className='h-3 w-3 animate-halfspin' />
              )}
            </div>
          </div>
          <div
            className={
              !openShop
                ? 'hidden'
                : 'absolute z-40 mt-2 w-40 rounded-md bg-white py-1 shadow-2xl ring-1 ring-black ring-opacity-5'
            }
            role='menu'
            aria-orientation='vertical'
          >
            <div className='group flex animate-fadein'>
              <div className='px-2' />

              <Sweets className='h-8 w-8 group-hover:animate-bounce' />

              <div className='cursor-pointer px-2 py-2 text-sm text-gray-700'>
                <Link href='/shopping'>Products</Link>
              </div>
            </div>
            <div className='group flex animate-fadein'>
              <div className='px-2' />

              <Boxes className='h-8 w-8 group-hover:animate-bounce' />

              <Link href='/snackbox'>
                <div className=' cursor-pointer px-2 py-2 text-sm text-gray-700'>
                  Snack Boxes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </button>
    </ClickAwayListener>
  );
};

export default ShoppingSection;
