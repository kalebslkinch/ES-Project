const Popout = () => {
  return (
    <>
      <div className='absolute h-full max-h-screen'>
        <div className='absolute flex h-screen w-screen items-center justify-center'>
          <div className='absolute inset-0 z-10 bg-gray-200'></div>

          <div className='z-50 w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='flex flex-col items-center space-x-4 p-4 text-center md:flex-row md:text-left'>
              <div className='rounded-full bg-red-50 p-3 md:self-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 fill-current text-red-700'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z' />
                </svg>
              </div>
              <div>
                <h1 className='text-xl font-semibold tracking-wide text-red-700'>
                  Deactivate account
                </h1>
                <p className='text-gray-500'>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>

            <div className='flex flex-col-reverse bg-gray-50 p-3 text-right md:block md:space-x-4'>
              <button className='rounded-lg border-2 bg-white px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 md:py-1.5'>
                Cancel
              </button>
              <button className='mb-2 rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 md:mb-0 md:py-1.5'>
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popout;
