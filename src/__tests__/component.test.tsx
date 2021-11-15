import React from 'react'
import renderer from 'react-test-renderer'
import { Image, ScrollView, Text, View } from '../'

it('renders Text correctly', () => {
  const tree = renderer
    .create(
      <Text
        style={{
          marginTop: 60,
          fontSize: 40,
        }}>
        Tanjun Text
      </Text>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders View correctly', () => {
  const tree = renderer
    .create(
      <View
        style={{
          padding: 60,
          width: 300,
          height: 200,
        }}>
        <Text>Tanjun View</Text>
      </View>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Image correctly', () => {
  const tree = renderer
    .create(
      <Image
        source={{
          // Credit: unsplash.com
          uri: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2392&q=80',
        }}
        style={{
          width: 300,
          height: 300,
        }}>
        Tanjun
      </Image>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ScrollView correctly', () => {
  const tree = renderer
    .create(
      <ScrollView
        style={{
          padding: 50,
        }}>
        <Image
          source={{
            // Credit: unsplash.com
            uri: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2392&q=80',
          }}
          style={{
            width: 300,
            height: 300,
          }}>
          Tanjun
        </Image>
      </ScrollView>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
