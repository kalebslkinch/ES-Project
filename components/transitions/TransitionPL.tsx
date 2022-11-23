import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionPL: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all delay-300 duration-500"
			enterFrom="pl-64 pb-64 overflow-hidden"
			enterTo="pl-0 pb-0 overflow-hidden"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}
export default TransitionPL
