const AboutUs = () => {
  const companyName = 'Company Name';
  return (
    <>
      <div className='flex-box overflow-y-contain bg-gradient-to-r from-pink-400 via-green-300 to-blue-400 '>
        <div className='gradient flex min-h-screen items-center text-white'>
          <div className='container mx-auto flex flex-wrap items-center p-4'>
            <div className='w-full p-4 text-center md:w-5/12'>
              <img src='/cooking.svg' alt='Not Found' />
            </div>
            <div className='w-full p-4 text-center md:w-7/12 md:text-left'>
              <div className='text-6xl font-medium'>{companyName}</div>
              <div className='mb-4 text-xl font-medium md:text-3xl'>
                Here at {companyName} we think believe that...
              </div>
              <div className='mb-8 text-lg'>
                You may have mistyped the address or the page may have moved.
              </div>
              <div className='justify flex'>
                <a href='#' className='rounded border border-white p-4'>
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>
          @import
          url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
        </style>
        <div className='min-w-screen flex min-h-screen items-center justify-center bg-gray-50 py-5'>
          <div className='w-full border-gray-200 px-5 py-16 text-gray-800 md:py-24'>
            <div className='mx-auto w-full max-w-6xl'>
              <div className='mx-auto max-w-xl text-center'>
                <h1 className='mb-5 text-6xl font-bold capitalize text-gray-600 md:text-7xl'>
                  Hear from a few of our happy customers
                </h1>

                <div className='mb-10 text-center'>
                  <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-500'></span>
                  <span className='ml-1 inline-block h-1 w-3 rounded-full bg-indigo-500'></span>
                  <span className='inline-block h-1 w-40 rounded-full bg-indigo-500'></span>
                  <span className='ml-1 inline-block h-1 w-3 rounded-full bg-indigo-500'></span>
                  <span className='ml-1 inline-block h-1 w-1 rounded-full bg-indigo-500'></span>
                </div>
              </div>
              <div className='-mx-3 items-start md:flex'>
                <div className='px-3 md:w-1/3'>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sunt ratione dolor exercitationem minima quas
                        itaque saepe quasi architecto vel! Accusantium, vero
                        sint recusandae cum tempora nemo commodi soluta
                        deleniti.
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing
                        elit. Dolore quod necessitatibus, labore sapiente, est,
                        dignissimos ullam error ipsam sint quam tempora vel.
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='px-3 md:w-1/3'>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, obcaecati ullam excepturi dicta error
                        deleniti sequi.
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptatum nostrum atque, corrupti,
                        vitae esse id accusamus dignissimos neque reprehenderit
                        natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                        iusto.
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='px-3 md:w-1/3'>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                        ipsum, laboriosam nostrum facere exercitationem pariatur
                        deserunt tempora molestiae assumenda nesciunt alias
                        eius? Illo, autem!
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800'>
                    <div className='mb-4 flex w-full items-center'>
                      <div className='h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
                        <img src='' alt='' />
                      </div>
                      <div className='flex-grow pl-3'>
                        <h6 className='text-sm font-bold uppercase text-gray-600'>
                          Insta Profile Name
                        </h6>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm leading-tight'>
                        <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto, explicabo, cupiditate quas totam!
                        <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
