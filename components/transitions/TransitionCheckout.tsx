import { Transition } from '@headlessui/react';

export default function TransitionCheckout({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-400 duration-1000'
      enterFrom='opacity-0 translate-y-64   overflow-hidden'
      enterTo=' opacity-100 translate-y-0  overflow-hidden'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
