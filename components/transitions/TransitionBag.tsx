import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionBag: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform delay-300 duration-1000"
			enterFrom="opacity-0 scale-0"
			enterTo="scale-100 opacity-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}

export default TransitionBag
