import { FC } from 'react'

const Down: FC<{ className: string }> = ({ className }) => {
	return (
		<>
			<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 9L12 16L5 9" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</>
	)
}
export default Down
