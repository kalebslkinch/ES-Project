import { FC, ReactChild } from 'react'

export const Flex: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex ${className}`}>{children}</div>
}

export const Col: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-col  ${className}`}>{children}</div>
}

export const Row: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-row  ${className}`}>{children}</div>
}
export const NavCol: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <nav className={`flex flex-col  ${className}`}>{children}</nav>
}
export const NavRow: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <nav className={`flex flex-row  ${className}`}>{children}</nav>
}

export const FlexWrap: FC<{ children: ReactChild; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-wrap  ${className}`}>{children}</div>
}
