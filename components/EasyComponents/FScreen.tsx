import { FC, ReactChild } from 'react'

export const FScreen: FC<{ children: ReactChild; className: string; bg: string }> = ({
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

export const FSRow: FC<{ children: ReactChild; className: string; bg: string }> = ({
	children,
	className = '',
	bg = ''
}) => {
	return (
		<div className={`flex w-screen flex-row ${className}`} style={{ backgroundImage: `url('${bg}')` }}>
			{children}
		</div>
	)
}

export const FSCol: FC<{ children: ReactChild; className: string; bg: string }> = ({
	children,
	className = '',
	bg = ''
}) => {
	return (
		<div className={`flex w-screen flex-col ${className}`} style={{ backgroundImage: `url('${bg}')` }}>
			{children}
		</div>
	)
}
