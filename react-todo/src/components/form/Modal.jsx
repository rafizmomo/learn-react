import { useState } from 'react';
import Card from '../Card';

const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center overflow-x-hidden overflow-y-auto backdrop-blur">
        <Card className={`w-2/3`}>{children}</Card>
      </div>
    </>
  );
};

Modal.Title = Card.Title;
Modal.Body = Card.Body;
Modal.Footer = Card.Footer;

export default Modal;
