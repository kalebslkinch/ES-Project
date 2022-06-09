import { useRouter } from 'next/router';

const Logout = ({ user, logout }) => {
  const router = useRouter();
  if (!user) {
    router.replace('/');
    return <></>;
  }
  return (
    <>
      <div className='relative z-10 h-[92vh]'>
        <div className=' flex h-full w-screen sm:justify-center'>
          <div className='inset-0 bg-white'></div>

          <div className='z-20 my-auto mx-auto  w-full max-w-xl overflow-hidden bg-white sm:rounded-lg sm:shadow-lg'>
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
                  Logout of Account
                </h1>
                <p className='pt-2text-gray-500'>
                  Are you sure that you want to Logout ?
                </p>
              </div>
            </div>

            <div className='flex flex-col-reverse bg-gray-50 p-3 text-right md:block md:space-x-4'>
              <button
                onClick={() => router.back()}
                className='rounded-lg border-2 bg-white px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 md:py-1.5'
              >
                Cancel
              </button>
              <button
                onClick={() => logout()}
                className='mb-2 rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 md:mb-0 md:py-1.5'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
