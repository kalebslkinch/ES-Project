import { Transition } from '@headlessui/react'
import { FC } from 'react'

const TransitionCandyShop: FC<{ children: any }> = ({ children }) => {
	return (
		<Transition
			show={true}
			appear={true}
			enter="transition-all transform  delay-300 duration-1000"
			enterFrom="translate-y-64  scale-150"
			enterTo="translate-y-0  scale-100"
			leave="transition-opacity duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<> {children}</>
		</Transition>
	)
}

export default TransitionCandyShop
