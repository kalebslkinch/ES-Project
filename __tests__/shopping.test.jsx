import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Products from "../components/Products";
import {mockProductsData} from '../utils/constants/mockData'



test('Contains correct information', () => {
  const {getByText} = render(<Products
    title={mockProductsData[0].title}
    description={mockProductsData[0].description}
    image={mockProductsData[0].image}
    price={mockProductsData[0].price}
    id={mockProductsData[0]._id}
    key={mockProductsData[0]._id}
  />)
  expect(getByText(mockProductsData[0].title)).toBeInTheDocument()
  expect(getByText(mockProductsData[0].description)).toBeInTheDocument()
  expect(screen.getByText(/6/ )).toBeInTheDocument()


})