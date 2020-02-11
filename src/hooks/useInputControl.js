import { useState } from 'react'

export const useInputControl = () => {
  const [inputs, setInput] = useState({})

  const handleInputControl = (e) => setInput({
    ...inputs,
    [e.target.name]: e.target.value
  })

  return [inputs, handleInputControl]
}

export default useInputControl
