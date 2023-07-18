import React from 'react';

const Button = ({ btnClass, children, onClick }) => {
    return (
        <div>
      <button className={btnClass} onClick={onClick}>
               {children}
      </button>
        </div>
    );
};

export default Button;