import React from 'react'

const InputField = ({ handleOnChange, value, name, label, type = 'text', ...rest }: any) => (
  <p>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} value={value} onChange={handleOnChange} {...rest} />
  </p>
)

export default InputField
