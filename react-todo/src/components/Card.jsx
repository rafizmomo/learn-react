const Card = ({ children, className }) => (
  <div
    className={`p-3 flex flex-col gap-3 drop-shadow rounded-lg bg-white ${className}`}
  >
    {children}
  </div>
);

const Title = ({ children, className }) => (
  <div className={` text-lg font-semibold px-2 py-1 pb-2 ${className}`}>
    {children}
  </div>
);

const Body = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);

const Footer = ({ children, className }) => (
  <div className={`${className}`}>{children}</div>
);

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
