import React from 'react';
import FirebaseAuth from '../components/auth/FirebaseAuth';
import { Col } from '../components/EasyComponents/Flex';
import { FSCol } from '../components/EasyComponents/FScreen';

const Login = () => {
  return (
    <>
      <FSCol className="animate-fadein h-screen pb-20">
          <Col className="w-[300px] h-[350px] mx-auto my-auto animate-border sticky  rounded-b-lg  sm:rounded-lg">
            <div className="flex font-bold justify-center text-3xl animate-movetitle pb-4 pt-20 text-gray-800">
              Login
            </div>
            <Col className="mt-5">
            <FirebaseAuth />
          </Col>
        </Col>
      </FSCol>
    </>
  );
};

export default Login;
