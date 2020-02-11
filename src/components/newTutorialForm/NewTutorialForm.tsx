import './NewTutorialForm.css'

import axios from 'axios'
import React from 'react'

import InputField from '@/components/inputField/InputField'
import useInputControl from '@/hooks/useInputControl'

const NewTutorialForm: React.FC = () => {
  const [inputs, handleInputControl] = useInputControl()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const data = { ...inputs }

    axios({
      method: 'post',
      url: 'http://localhost:3007/api/tutorials/add',
      data,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        // handle success
        // eslint-disable-next-line
        console.log(response)
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        // handle error
        // eslint-disable-next-line
        console.log(error)
      })
  }

  return (
    <form
      action="http://localhost:3007/api/tutorials/add"
      method="POST"
      className="new-tutorial-form"
      onSubmit={handleSubmit}
    >
      <InputField
        name="tutorial-name"
        label="Tutorial name:"
        handleOnChange={handleInputControl}
        value={inputs['tutorial-name'] || ''}
      />
      <InputField
        name="url"
        label="Git repo:"
        handleOnChange={handleInputControl}
        value={inputs.url || ''}
      />
      <InputField
        name="image"
        label="Image:"
        handleOnChange={() => {}}
        type="file"
        accept="image/*"
      />
      <InputField
        name="tags"
        label="Tags:"
        handleOnChange={handleInputControl}
        value={inputs.tags || ''}
      />
      <InputField
        name="main-category"
        label="Main category:"
        handleOnChange={handleInputControl}
        value={inputs['main-category']}
      />
      <input type="submit" value="Send" />
    </form>
  )
}

export default NewTutorialForm
