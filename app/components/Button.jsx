const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
