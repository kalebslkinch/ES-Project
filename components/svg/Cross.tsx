import { FC } from 'react'

const Cross: FC<{ className: string }> = ({ className }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#4A5568">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</svg>
		</>
	)
}

export default Cross
