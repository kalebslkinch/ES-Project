import { Transition } from '@headlessui/react';

export default function TransitionOpac({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-opacity delay-300 duration-1000'
      enterFrom='opacity-0 '
      enterTo='opacity-100 '
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
