import { Transition } from '@headlessui/react';

export default function TransitionInstaCard({ children, inView }) {
  return (
    <Transition
      show={inView}
      appear={inView}
      enter='transition-all transform  delay-700 duration-1000'
      enterFrom='scale-0'
      enterTo='scale-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
