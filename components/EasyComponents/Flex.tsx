export const Flex = ({ children, className = '' }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export const Col = ({ children, className = '' }) => {
  return <div className={`flex flex-col  ${className}`}>{children}</div>;
};

export const Row = ({ children, className = '' }) => {
  return <div className={`flex flex-row  ${className}`}>{children}</div>;
};
export const NavCol = ({ children, className = '' }) => {
  return <nav className={`flex flex-col  ${className}`}>{children}</nav>;
};
export const NavRow = ({ children, className = '' }) => {
  return <nav className={`flex flex-row  ${className}`}>{children}</nav>;
};

export const FlexWrap = ({ children, className = '' }) => {
  return <div className={`flex flex-wrap  ${className}`}>{children}</div>;
};
