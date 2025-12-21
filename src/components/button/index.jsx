import React from 'react';

function Button({ label, onClick, className, href  }) {
    return (
        <a onClick={onClick} href={href} target="_blank" className={className + " px-5 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"}>
            {label}
        </a>
    );
};

export default Button;