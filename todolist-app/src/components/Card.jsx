import React from "react";

const Card = ({ children }) => (
    <div className="rounded-xl shadow bg-white p-4 ">
        {children}
    </div>
);

Card.Title = ({ children }) => (
    <div className="mb-5 pb-2 text-xl font-bold border-b border-slate-400">
        {children}
    </div>
);

Card.Body = ({ children }) => (
    <div className="flex flex-col gap-3">
        {children}
    </div>
);

Card.Footer = ({ children }) => (
    <div className="pt-2">
        {children}
    </div>
);

export default Card;
