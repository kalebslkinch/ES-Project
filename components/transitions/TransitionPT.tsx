import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionPT: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all delay-300 duration-1000"
			enterFrom="pt-64"
			enterTo="pt-0 "
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}

export default TransitionPT
