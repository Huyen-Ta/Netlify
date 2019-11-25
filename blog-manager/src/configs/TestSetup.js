import React from 'react'
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const jsdom = require('jsdom')

const { JSDOM } = jsdom

// Mock for localStorage
class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}

// Mock for connects helper
jest.mock('../contexts/helpers/Connect', () => ({
  connects: () => function createWrapper(WrapperComponent) {
    return function createConnect(props) {
      return <WrapperComponent {...props} />
    }
  },
}))

// Setup adapter to work with enzyme
configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
const dom = new JSDOM('<html><body><script></script></body></html>')
global.shallow = shallow
global.render = render
global.mount = mount
global.window = dom.window
global.document = dom.window.document
global.localStorage = new LocalStorageMock()
