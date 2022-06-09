import Link from 'next/link';
import ClickAwayListener from 'react-click-away-listener';
import User from '../svg/User';
import Heart from '../svg/Heart';
import Logout from '../svg/Logout';
import Login from '../svg/Login';
import { FC, MouseEventHandler, ReactChild } from 'react';

interface ProfileSectionProps {
  handleProfileClickAway: any;
  user: any;
  icons: ReactChild;
}

const ProfileSection: FC<ProfileSectionProps> = ({
  handleProfileClickAway,
  user,
  icons,
}) => {
  return (
    <ClickAwayListener onClickAway={handleProfileClickAway}>
      <div
        className='absolute right-0 top-12 z-40 w-40  animate-fadein rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 duration-700 ease-in'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        {!user ? null : (
          <>
            <div className='group flex'>
              <div className='px-2' />

              <User className='h-6 w-6 group-hover:animate-slowbounce' />

              <Link href='/my-profile'>
                <div
                  className=' block cursor-pointer px-2 py-2 text-sm text-gray-800 '
                  role='menuitem'
                >
                  Your Profile
                </div>
              </Link>
            </div>

            <div className='group flex'>
              <div className='px-2' />

              <Heart className='h-6 w-6 group-hover:animate-slowbounce' />
              <Link href='/orders'>
                <div
                  className='block cursor-pointer px-2 py-2 text-sm text-gray-800 '
                  role='menuitem'
                >
                  Orders
                </div>
              </Link>
            </div>
          </>
        )}
        {!user ? (
          <>
            <div className='group flex'>
              <div className='px-2' />

              <Login className={icons} />
              <Link href='/login'>
                <div
                  className='block cursor-pointer px-4   py-2 text-sm text-gray-700 '
                  role='menuitem'
                >
                  Login
                </div>
              </Link>
            </div>
          </>
        ) : (
          <div className='group flex'>
            <div className='px-2' />
            <Logout className={icons} />
            <Link href='/logout'>
              <div
                className='block cursor-pointer px-2 py-2 text-sm text-gray-700 '
                role='menuitem'
              >
                Logout
              </div>
            </Link>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default ProfileSection;
