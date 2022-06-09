import Image from 'next/image';
import { FC } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  quantity: number;
  image: string;
}

const OrderProductInfoRow: FC<ProductCardProps> = ({
  title,
  price,
  quantity,
  image,
}) => {
  return (
    <>
      <tbody className='mt-1 bg-gray-200'>
        <tr className='bg-white'>
          <td className='relative flex h-16 w-16 justify-center '>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </td>
          <td className='px-1 py-4 text-center'>{title}</td>
          <td className='px-6 py-4 text-center text-gray-900'>£{price}</td>
          <td className='px-6 py-4 text-center text-gray-900'>{quantity}</td>
          <td className='px-6 py-4 text-center text-gray-900'>
            £{(parseFloat(price) * quantity).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default OrderProductInfoRow;
