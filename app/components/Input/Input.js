import React from 'react';

const Input = ({className, onChange, placeholder, type}) => {
  return(
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type={type}></input>
  )
}

export default Input;
