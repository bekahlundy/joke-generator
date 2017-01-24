import React from 'react';

const Input = ({className, onChange, placeholder}) => {
  return(
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}></input>
  )
}

export default Input;
