import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionTitle: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform delay-300 duration-1000"
			enterFrom="opacity-0 translate-x-96 scale-50"
			enterTo="opacity-100 translate-x-0 scale-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}
export default TransitionTitle
