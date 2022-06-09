export default function Menu({ size }) {
  return (
    <>
      <svg
        className={`block ${size}`}
        xmlns='https://freesvg.org/img/abstract-user-flat-3.png'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>

      <svg
        className='hidden h-12 w-12'
        xmlns='https://freesvg.org/img/abstract-user-flat-3.png'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </>
  );
}
