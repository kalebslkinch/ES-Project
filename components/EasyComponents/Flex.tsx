import { FC, ReactNode } from 'react'

export const Flex: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex ${className}`}>{children}</div>
}

export const Col: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-col  ${className}`}>{children}</div>
}

export const Row: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-row  ${className}`}>{children}</div>
}
export const NavCol: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <nav className={`flex flex-col  ${className}`}>{children}</nav>
}
export const NavRow: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <nav className={`flex flex-row  ${className}`}>{children}</nav>
}

export const FlexWrap: FC<{ children: any; className: string }> = ({ children, className = '' }) => {
	return <div className={`flex flex-wrap  ${className}`}>{children}</div>
}
