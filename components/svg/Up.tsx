import { FC } from 'react'

const Up: FC<{ className: string }> = ({ className }) => {
	return (
		<>
			<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 15L12 8L19 15" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</>
	)
}

export default Up
