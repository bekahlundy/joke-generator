import React from 'react';
import './button-style.scss';

const Button = ({className, onClick, text}) => {
  return (
    <button
      className={className}
      onClick={onClick}>{text}</button>
  );
}

export default Button;
