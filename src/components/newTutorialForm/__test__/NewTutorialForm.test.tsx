import { shallow } from 'enzyme'
import React from 'react'

import NewTutorialForm from '@/components/newTutorialForm/NewTutorialForm'

describe('NewTutorialFrom', () => {
  it('should be rendered correctly', () => {
    expect(shallow(<NewTutorialForm />)).toMatchSnapshot()
  })
})
