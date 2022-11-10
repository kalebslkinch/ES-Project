import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Col, Row } from "../EasyComponents/Flex";
import { FSCol } from "../EasyComponents/FScreen";
import Sweets from "../svg/Sweets";
import TransitionCandyShop from "../transitions/TransitionCandyShop";
import TransitionHomeText from "../transitions/TransitionHomeText";
import TransitionTitle from "../transitions/TransitionTitle";

const Header:FC = () => {
    const router = useRouter();

  return (<FSCol className='gradient items-center pt-8 pb-20 text-white sm:pb-28 lg:pt-16'>
         
         {/* Title */}
          <TransitionTitle>
            <div className='font-dancing'>
              <h1 className='pb-10 font-dancing text-[4.2rem] sm:text-7xl md:text-9xl'>
                Exotic Snaxx
              </h1>
            </div>
          </TransitionTitle>

        {/* Candy Shop Icon */}
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
                  <button className='text-md my-auto rounded-full border border-white px-3 py-2 text-center shadow-sm hover:border-transparent hover:bg-pink-400  sm:text-xl' onClick={() => router.push('/shopping')}>
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
        </FSCol>)
}
  
export default Header;