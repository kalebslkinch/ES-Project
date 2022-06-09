import { Transition } from '@headlessui/react';

export default function TransitionCheckoutButton({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-200 duration-700'
      enterFrom='opacity-0 w-0 overflow-hidden'
      enterTo='opacity-100 w-18  overflow-hidden'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
