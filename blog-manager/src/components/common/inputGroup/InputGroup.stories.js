import React from 'react'
import { storiesOf } from '@storybook/react'

// Import component InputGroup
import InputGroup from './index'

// Defined storybook for InputGroup
storiesOf('InputGroup', module).add('InputGroup style', () => (
  <div className='storybook'>
    <h4 className='storybook__title'>InputGroup</h4>
    <div className='storybook__input-group'>
      <p>InputGroup Default</p>
      <InputGroup
        placeholder='Enter the email ...'
        defaultValue=''
        name='email'
        title='Email'
      />
    </div>
    <pre className='storybook__guide'>
      {`
        <InputGroup
          placeholder='Enter the email ...'
          defaultValue=''
          name='email'
        />
      `}
    </pre>
    <div className='storybook__input-group'>
      <p>InputGroup Error</p>
      <InputGroup
        placeholder='Enter the email ...'
        defaultValue=''
        name='email'
        error={{
          email: 'Required field',
        }}
        title='Email'
      />
    </div>
    <pre className='storybook__guide'>
      {`  
        <InputGroup
          placeholder='Enter the email ...'
          defaultValue=''
          name='email'
          isError
        />
      `}
    </pre>
  </div>
))
