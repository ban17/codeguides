import './NewTutorialForm.css'

import axios from 'axios'
import React, { useState } from 'react'

import InputField from '@/components/inputField/InputField'

const NewTutorialForm: React.FC = () => {
  // TODO use one state for all input values somehow xD
  const [name, changeName] = useState('')
  const [url, changeUrl] = useState('')
  const [tags, changeTags] = useState('')
  const [category, changeCategory] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const data = {
      tags,
      url,
      'tutorial-name': name,
      'main-category': category
    }

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
        handleOnChange={changeName}
        value={name}
      />
      <InputField
        name="url"
        label="Git repo:"
        handleOnChange={changeUrl}
        value={url}
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
        handleOnChange={changeTags}
        value={tags}
      />
      <InputField
        name="main-category"
        label="Main category:"
        handleOnChange={changeCategory}
        value={category}
      />
      <input type="submit" value="Send" />
    </form>
  )
}

export default NewTutorialForm
