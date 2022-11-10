import Image from 'next/image';
import { FC } from 'react';

const InstagramCard: FC<{image: string; name: string; message: string}> = ({ image, name, message }) => {
  return (
    <div className='mx-auto mb-6 h-36 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800 shadow-md'>
      <div className='mb-4 flex w-full items-center'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
          <Image
            src={image}
            alt={`Exotic Snaxx | ${name} Testimonial`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        {/* Name */}
        <div className='flex-grow pl-3'>
          <h6 className='overflow-hidden text-sm font-bold  uppercase text-gray-600'>
            {name}
          </h6>
        </div>
      </div>
      <div className='flex w-full flex-row'>
        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
          "
        </span>

        <p className='overflow-hidden overflow-ellipsis  text-sm  leading-tight'>
          {message}
          <span className='text-lg font-bold italic leading-none text-gray-400 '>
            "
          </span>
        </p>
      </div>
    </div>
  );
};

export default InstagramCard;
