import React from 'react';

const Input = ({className, onChange, placeholder, type, name, defaultChecked}) => {
  return(
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      defaultChecked={defaultChecked}
      type={type}></input>
  )
}

export default Input;
