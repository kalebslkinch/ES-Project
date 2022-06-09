import { Col } from '../../EasyComponents/Flex';
import { FSCol } from '../../EasyComponents/FScreen';
import InstagramCard from '../InstagramCard';
import TransitionInstaCard from '../../transitions/TransitionInstaCard';

const WWOContent = ({ data, inView }) => {
  return (
    <FSCol>
      <Col className='mx-auto w-3/4 text-center'>
        <h1 className='mb-1 h-16 overflow-hidden overflow-ellipsis text-2xl  font-bold  capitalize text-gray-800 sm:h-8  md:text-3xl lg:h-16 lg:text-4xl'>
          Hear from a few of our happy customers
        </h1>

        <div className='mb-10 text-center'>
          <span className='ml-1 inline-block h-1 w-0 rounded-full bg-indigo-800 sm:w-3'></span>

          <span className='ml-1 inline-block h-1 w-3 rounded-full  bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-1 rounded-full  bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-1 rounded-full  bg-indigo-800'></span>

          <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-3 rounded-full bg-indigo-800'></span>

          <span className='ml-1 inline-block h-1 w-40 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-3 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-800'></span>

          <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-3 rounded-full bg-indigo-800'></span>
          <span className='ml-1 inline-block h-1 w-0 rounded-full bg-indigo-800 sm:w-3'></span>
        </div>
      </Col>
      <TransitionInstaCard inView={inView}>
        <div className='grid w-screen grid-cols-1 overflow-hidden px-6 sm:gap-2 sm:px-10 md:grid-cols-2 lg:mx-auto  lg:grid-cols-3 lg:gap-3  xl:max-w-[1200px] '>
          {data.allInstagramInput.data.map((data) => (
            <InstagramCard
              image={data.image}
              name={data.name}
              message={data.message}
            />
          ))}
        </div>
      </TransitionInstaCard>
    </FSCol>
  );
};

export default WWOContent;
