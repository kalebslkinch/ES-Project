import { Transition } from '@headlessui/react';

export default function TransitionPT({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-300 duration-1000'
      enterFrom='pt-64'
      enterTo='pt-0 '
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
