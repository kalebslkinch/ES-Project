export const FScreen = ({ children, className = '', bg = '' }) => {
  return (
    <div
      className={`w-screen ${className}`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      {children}
    </div>
  );
};

export const FSRow = ({ children, className = '', bg = '' }) => {
  return (
    <div
      className={`flex w-screen flex-row ${className}`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      {children}
    </div>
  );
};

export const FSCol = ({ children, className = '', bg = '' }) => {
  return (
    <div
      className={`flex w-screen flex-col ${className}`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      {children}
    </div>
  );
};
