const WWOStatement = ({
  percentageAboutUs,
  refContactUs,
  percentageContactUs,
}) => {
  return (
    <>
      {/* What we offer title */}
      <h2
        style={{
          opacity: 0.6 + parseFloat(percentageAboutUs.toPrecision(2)),
          transform: `scale(${
            0.8 + parseFloat(percentageAboutUs.toPrecision(2))
          })`,
        }}
        className='text-wwoTitle mx-auto w-4/5 text-center text-2xl capitalize'
        ref={refContactUs}
      >
        What we provide you with
      </h2>

      {/* What we offer statement 1 */}
      {/* Other Devices */}
      <h2
        style={{
          transform: `translateX(${
            parseFloat(percentageContactUs.toPrecision(2)) * 800
          }px)`,
          opacity:
            parseFloat(percentageContactUs.toPrecision(2)) < 0.4
              ? 0.4 + parseFloat(percentageContactUs.toPrecision(2))
              : 1.2 - parseFloat(percentageContactUs.toPrecision(2)),
        }}
        className='hide-mobile text-wwoLi pt-6 text-2xl md:pt-10'
      >
        Sweets from all over the world
      </h2>
      {/* Mobile */}
      <h2
        style={{
          transform: `translateX(${
            parseFloat(percentageContactUs.toPrecision(2)) * 300
          }px)`,
          opacity:
            parseFloat(percentageContactUs.toPrecision(2)) < 0.4
              ? 0.4 + parseFloat(percentageContactUs.toPrecision(2))
              : 1 - parseFloat(percentageContactUs.toPrecision(2)),
        }}
        className='hide text-wwoLi pt-6 text-xl md:pt-10'
      >
        Sweets from all over the world
      </h2>

      {/* What we offer statement 2 */}
      {/* Other Devices */}

      <h2
        style={{
          transform: `translateX(${
            parseFloat(percentageContactUs.toPrecision(2)) * 800
          }px)`,
          opacity:
            parseFloat(percentageContactUs.toPrecision(2)) < 0.4
              ? 0.4 + parseFloat(percentageContactUs.toPrecision(2))
              : 1 - parseFloat(percentageContactUs.toPrecision(2)),
        }}
        className='hide-mobile text-wwoLi pt-6 text-2xl md:pt-10'
      >
        Fair prices on products and delivery
      </h2>
      {/* Mobile */}
      <h2
        style={{
          transform: `translateX(${
            parseFloat(percentageContactUs.toPrecision(2)) * 200
          }px)`,
          opacity:
            parseFloat(percentageContactUs.toPrecision(2)) < 0.4
              ? 0.4 + parseFloat(percentageContactUs.toPrecision(2))
              : 0.95 - parseFloat(percentageContactUs.toPrecision(2)),
        }}
        className='hide text-wwoLi pt-6 text-xl md:pt-10'
      >
        Fair prices on products and delivery
      </h2>
    </>
  );
};

export default WWOStatement;
