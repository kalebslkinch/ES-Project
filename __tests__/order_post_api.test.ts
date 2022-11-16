import '@testing-library/jest-dom'

describe('Order Post API', () => {
	const stringProducts: string = JSON.stringify([
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
	])

	const productData: {
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

	const products: typeof productData = JSON.parse(stringProducts)

	let filteredWithCorrectQuantity: any[] = []
	let actualAmounts: number[] = []

	const IDs = products.map((product: { id: string }) => product.id)
	it('Gets list of IDs', () => {
		expect(IDs).toEqual(['2', '3'])
	})

	const filteredProducts = productData.filter((product: { id: string }) => IDs.includes(product.id))

	it('Fitlters products by IDs', () => {
		expect(filteredProducts).toEqual([
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
		])
	})

	for (let i = 0; i < filteredProducts.length; i++) {
		filteredWithCorrectQuantity.push({
			...filteredProducts[i],
			quantity: products[i].quantity
		})
	}

	filteredWithCorrectQuantity.forEach((each: any) => {
		actualAmounts.push(each.price * each.quantity)
	})

	it('Creates list of ', () => {
		expect(actualAmounts).toEqual([200, 300])
	})

	const totalAmount = actualAmounts.reduce((a: number, b: number) => a + b, 0)
	const totalQuantity = products.map(product => product.quantity).reduce((a, b) => a + b, 0)

	it('total amount of order', () => {
		expect(totalAmount).toBe(500)
	})

	it('total quantity of order', () => {
		expect(totalQuantity).toBe(20)
	})
})
