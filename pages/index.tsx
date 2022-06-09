import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ALL_INSTAGRAM from '../graphql/querys/getAllInstagram';
import Sweets from '../components/svg/Sweets';
import TransitionTitle from '../components/transitions/TransitionTitle';
import TransitionCandyShop from '../components/transitions/TransitionCandyShop';
import TransitionHomeText from '../components/transitions/TransitionHomeText';
import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { Col, Row } from '../components/EasyComponents/Flex';
import { FSCol } from '../components/EasyComponents/FScreen';
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

  // Router
  const router = useRouter();

  if (loading) return <Loading />;
  if (error) return alert(error.message);
  // Encryption and Decryption

  return (
    <>
      <div className='overflow-hidden bg-gradient-to-r from-pink-400 via-green-300 to-blue-400'>
        <FSCol className='gradient items-center pt-8 pb-20 text-white sm:pb-28 lg:pt-16'>
          <TransitionTitle>
            <div className='font-dancing'>
              <h1 className='pb-10 font-dancing text-[4.2rem] sm:text-7xl md:text-9xl'>
                Exotic Snaxx
              </h1>
            </div>
          </TransitionTitle>

          <FSCol className=' w-[95%] max-w-[800px] items-center justify-center overflow-hidden rounded-xl sm:flex-row md:max-w-[920px] md:bg-blue-500/30 md:py-4 md:px-8 lg:w-5/6 lg:py-4 lg:px-4 xl:px-14 xl:py-14'>
            <Col className='justify-center sm:w-2/5'>
              <TransitionCandyShop>
                <Sweets className='mx-auto h-64 w-64 sm:mx-0 lg:h-80 lg:w-80' />
              </TransitionCandyShop>
            </Col>

            <Col className='sm:text w-full space-y-3 lg:w-3/5'>
              <Col className='mx-auto mt-6 w-[90%] sm:justify-start lg:ml-6 lg:w-[520px]'>
                <TransitionHomeText>
                  <h3 className='text-2xl sm:text-3xl'>
                    Bringing you exotic sweets from all over the world
                  </h3>

                  <p className='mt-4 text-lg sm:text-xl lg:pr-2'>
                    Pick and Choose the ones you want or try out our customer
                    favourite Snack Boxes which are full of Exotic Magic
                  </p>
                </TransitionHomeText>
              </Col>
              <TransitionHomeText>
                <Row className='mt-8 ml-4 flex w-screen space-x-2 pb-2 sm:ml-6  sm:w-3/4 sm:space-x-4 lg:pb-0'>
                  <button
                    className='text-md my-auto rounded-full border border-white px-3 py-2 text-center shadow-sm hover:border-transparent hover:bg-pink-400  sm:text-xl'
                    onClick={() => router.push('/shopping')}
                  >
                    Enter Store
                  </button>
                  <Link href='/snackbox'>
                    <button className='text-md my-auto rounded-full  border border-white px-3 py-2 text-center shadow-sm hover:border-transparent hover:bg-pink-400 sm:text-xl'>
                      Snack Boxes
                    </button>
                  </Link>
                </Row>
              </TransitionHomeText>
            </Col>
          </FSCol>
        </FSCol>

        <div
          ref={ref}
          className='flex w-screen items-center justify-center bg-[#f7f7f5] py-6 lg:py-16 '
        >
          <WWOContent data={data} inView={inView} />
        </div>
      </div>
    </>
  );
};

export default Index;
