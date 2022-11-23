import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionContactUS: FC = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform delay-300 duration-1000"
			enterFrom="translate-x-96 opacity-0 "
			enterTo="translate-x-0 opacity-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}

export default TransitionContactUS
