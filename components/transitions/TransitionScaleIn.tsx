import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionScaleIn: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform delay-300 duration-1000"
			enterFrom="opacity-0 scale-50"
			enterTo="scale-100 opacity-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}
export default TransitionScaleIn
