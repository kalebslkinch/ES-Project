import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionWidth: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform delay-400 duration-1000"
			enterFrom="opacity-0 w-0 overflow-hidden"
			enterTo="w-full opacity-100 overflow-hidden"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}

export default TransitionWidth
