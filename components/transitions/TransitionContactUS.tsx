import { Transition } from '@headlessui/react';

export default function TransitionContactUS({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all transform delay-300 duration-1000'
      enterFrom='translate-x-96 opacity-0 '
      enterTo='translate-x-0 opacity-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
