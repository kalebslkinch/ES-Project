const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='mx-auto rounded-lg border border-white bg-gray-600 py-2 px-3'
    >
      {text}
    </button>
  );
};

export default Button;
