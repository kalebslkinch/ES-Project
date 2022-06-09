import { Transition } from '@headlessui/react';

export default function TransitionHomeBottomTitle({ children, inView }) {
  return (
    <Transition
      show={inView}
      appear={inView}
      enter='transition-all  transform delay-200 duration-1000'
      enterFrom='mx-auto sm:w-1/4 sm:w-10 sm:opacity-0  sm:h-auto overflow-x-hidden '
      enterTo='mx-auto sm:w-full sm:opacity-100  sm:h-auto overflow-x-hidden'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
