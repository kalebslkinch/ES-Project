import React from 'react';
import Products from '../components/products/Products';
import Loading from '../components/Loading';
import GET_PRODUCTS_AVAILABLE from '../graphql/querys/getProductsAvailable';
import { useQuery } from '@apollo/client';
import { FSCol } from '../components/EasyComponents/FScreen';
import { Col } from '../components/EasyComponents/Flex';

const Shopping = () => {
  // States
  // Use Querys
  const {
    data: getProductsAvaialable,
    loading: loadingProductsAvaialable,
    error,
  } = useQuery(GET_PRODUCTS_AVAILABLE);
  // Event Listeners

  if (error) return `Error ${error}`;
  if (loadingProductsAvaialable) {
    return <Loading />;
  }

  // Get data

  const productsAvailable = getProductsAvaialable.allProductsAvailable.data;

  // Map data to arrays

  return (
    <FSCol className='bg-[#f7f7f5]'>
      <h1 className='mt-8 flex  justify-center py-4 text-6xl font-medium text-gray-800 sm:text-5xl'>
        Products
      </h1>
      <FSCol className='mx-auto mt-5 gap-x-3 px-6 sm:grid sm:w-11/12 sm:grid-cols-2 md:grid-cols-3 lg:w-[95%] lg:grid-cols-4 xl:max-w-[1200px] xl:px-0'>
        {productsAvailable.map((data) => (
          <Products
            title={data.title}
            description={data.description}
            image={data.image}
            price={data.price}
            id={data._id}
          />
        ))}
      </FSCol>
    </FSCol>
  );
};

export default Shopping;
