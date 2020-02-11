import { useState } from 'react'

export const useInputControl = (): [any, any] => {
  const [inputs, setInput] = useState({})

  const handleInputControl = (e: any) =>
    setInput({
      ...inputs,
      [e.currentTarget.name]: e.currentTarget.value
    })

  return [inputs, handleInputControl]
}

export default useInputControl
