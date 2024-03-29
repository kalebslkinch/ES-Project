import { FC } from 'react'

const Plus: FC<{ className: string }> = ({ className }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#4A5568">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
			</svg>{' '}
		</>
	)
}
export default Plus
