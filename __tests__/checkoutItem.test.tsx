import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { mockCartData } from '../utils/constants/mockData';
import ShoppingCartItemMock from '../components/mock_components/ShoppingCartItemMock';
import CheckoutItemsMock from '../components/mock_components/CheckoutItemMock';


const stringData = JSON.stringify(mockCartData)

test('Contains correct information', () => {
  const {getByText} = render(<CheckoutItemsMock
    title={mockCartData[0].title}
    description={mockCartData[0].description}
    image={mockCartData[0].image}
    price={mockCartData[0].price}
    quantity={mockCartData[0].quantity}
    id={mockCartData[0]._id}
    cookie={stringData}
    key={mockCartData[0]._id}
  / >
  )

const newPrice = mockCartData[0].quantity * parseFloat(mockCartData[0].price)

  expect(getByText(mockCartData[0].title)).toBeInTheDocument()
  expect(getByText(mockCartData[0].description)).toBeInTheDocument()
  expect(getByText(`${mockCartData[0].quantity}`)).toBeInTheDocument()
  expect(getByText(`£${newPrice.toFixed(2)}`)).toBeInTheDocument()
}) 