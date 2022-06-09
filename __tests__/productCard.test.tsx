import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockCartData, mockProductsData } from '../utils/constants/mockData';
import ProductCard from '../components/products/ProductCard';

const stringData = JSON.stringify(mockProductsData);

test('Contains correct information', () => {
  const { getByText } = render(
    <ProductCard
      openUp={() => true}
      image={mockProductsData[0].image}
      title={mockProductsData[0].title}
      description={mockProductsData[0].description}
      price={mockProductsData[0].price}
    />
  );
  expect(getByText(mockCartData[0].title)).toBeInTheDocument();
  expect(getByText(mockCartData[0].description)).toBeInTheDocument();
  expect(
    getByText(`${parseFloat(mockCartData[0].price).toFixed(2)}`)
  ).toBeInTheDocument();
});
