import React from 'react';

const Input = ({className, onChange, placeholder, type, name}) => {
  return(
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type={type}></input>
  )
}

export default Input;
