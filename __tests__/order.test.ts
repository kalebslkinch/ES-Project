import '@testing-library/jest-dom'

describe('Order', () => {
	const products: {
		id: string
		name: string
		price: number
		quantity: number
	}[] = [
		{
			id: '1',
			name: 'Product 1',
			price: 10,
			quantity: 10
		},
		{
			id: '2',
			name: 'Product 2',
			price: 20,
			quantity: 10
		},
		{
			id: '3',
			name: 'Product 3',
			price: 30,
			quantity: 10
		}
	]

	it('total amount of order', () => {
		const totalAmount = products.map(product => Number(product.price) * product.quantity).reduce((a, b) => a + b, 0)

		expect(totalAmount).toBe(600)
	})

	it('total quantity of order', () => {
		const totalQuantity = products.map(product => product.quantity).reduce((a, b) => a + b, 0)
		expect(totalQuantity).toBe(30)
	})
})
