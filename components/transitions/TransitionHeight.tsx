import { Transition } from '@headlessui/react';

export default function TransitionHeight({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-400 duration-1000'
      enterFrom='w-0 overflow-hidden'
      enterTo='w-full overflow-hidden'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
