import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import ALL_INSTAGRAM from '../graphql/querys/getAllInstagram';
import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import  Header  from './../components/home/Header';

const WWOContent = dynamic(
  () => import('../components/home/whatweoffer/WWOContent')
);

const Index = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const checkCookie = async () => {
    if (cookie.get('OrderDone') !== (undefined || null)) {
      cookie.remove('OrderDone');
    } else {
      return;
    }
    return;
  };

  useEffect(() => {
    checkCookie();
  }, []);

  const { data, loading, error } = useQuery(ALL_INSTAGRAM);

  if (loading) return <Loading />;
  if (error) return alert(error.message);

  return (
      <div className='overflow-hidden bg-gradient-to-r from-pink-400 via-green-300 to-blue-400'>
        <Header />
        <div
          ref={ref}
          className='flex w-screen items-center justify-center bg-[#f7f7f5] py-6 lg:py-16 '
        >
          <WWOContent data={data} inView={inView} />
        </div>
      </div>
  );
};

export default Index;
