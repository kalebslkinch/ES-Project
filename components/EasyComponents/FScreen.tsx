import { FC, ReactChild, ReactNode } from 'react'

export const FScreen: FC<{ children: any; className: string; bg?: string }> = ({
	children,
	className = '',
	bg = ''
}) => {
	return (
		<div className={`w-screen ${className}`} style={{ backgroundImage: `url('${bg}')` }}>
			{children}
		</div>
	)
}

export const FSRow: FC<{ children: any; className: string; bg?: string }> = ({ children, className = '', bg = '' }) => {
	return (
		<div className={`flex w-screen flex-row ${className}`} style={{ backgroundImage: `url('${bg}')` }}>
			{children}
		</div>
	)
}

export const FSCol: FC<{ children: any; className: string; bg?: string }> = ({ children, className = '', bg = '' }) => {
	return (
		<div className={`flex w-screen flex-col ${className}`} style={{ backgroundImage: `url('${bg}')` }}>
			{children}
		</div>
	)
}
