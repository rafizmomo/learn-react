const Input = ({ type = 'text', className }) => (
  <>
    <input
      type={type}
      className={`p-2 rounded-lg border-2 border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 transition duration-200 ${className}`}
    />
  </>
);

export default Input;
