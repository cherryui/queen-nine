import 'react-native'
import React from 'react'
import Card from '../Components/Card'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const component = renderer.create(
    <Card card='ace'/>
  ).toJSON()
  expect(component).toMatchSnapshot()
})
