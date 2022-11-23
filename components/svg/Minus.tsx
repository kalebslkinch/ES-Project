import { FC } from 'react'

const Minus: FC<{ className: string }> = ({ className }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#4A5568">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
			</svg>{' '}
		</>
	)
}
export default Minus
