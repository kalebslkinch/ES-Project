import { Transition } from '@headlessui/react';

export default function TransitionProducts({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all transform delay-200 duration-700'
      enterFrom='opacity-0 -translate-x-20'
      enterTo='opacity-100 translate-x-0'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
