const Button = ({ type = 'button', children, className }) => (
  <>
    <button
      type={type}
      className={`px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 transition duration-200 ${className}`}
    >
      {children}
    </button>
  </>
);

export default Button;
