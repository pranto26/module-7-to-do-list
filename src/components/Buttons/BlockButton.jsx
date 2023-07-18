import React from 'react';

const BlockButton = ({ btnClass, onClick, children }) => {
    return (
        <div>
             <div className="d-grid">
        <button className={`${btnClass} btn-block`} onClick={onClick}>
          {children}
        </button>
      </div>
            
        </div>
    );
};

export default BlockButton;