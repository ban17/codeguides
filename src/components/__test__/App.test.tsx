import { mount, shallow } from 'enzyme'
import React from 'react'

import App from '@/components/App'

describe('App', () => {
  it('should render App component', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })

  it('should show current year on button click', () => {
    const wrapper = mount(<App />)
    const button = wrapper.find('.test-button')

    button.simulate('click')
    wrapper.update()

    expect(wrapper.find('h3').text()).toBe(new Date().getFullYear().toString())
    wrapper.unmount()
  })
})
