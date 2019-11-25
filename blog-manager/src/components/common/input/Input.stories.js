import React from 'react'
import { storiesOf } from '@storybook/react'

// Import component Input
import Input from './index'

// Defined storybook for Input
storiesOf('Input', module).add('Input style', () => (
  <div className='storybook'>
    <h4 className='storybook__title'>Input</h4>
    <div className='storybook__input-group'>
      <p>Input Default</p>
      <Input placeholder='Enter the email ...' defaultValue='' name='email' />
    </div>
    <pre className='storybook__guide'>
      {`
        <Input
          placeholder='Enter the email ...'
          defaultValue=''
          name='email'
        />
      `}
    </pre>
    <div className='storybook__input-group'>
      <p>InputError</p>
      <Input
        placeholder='Enter the email ...'
        defaultValue=''
        name='email'
        error={{
          email: 'Required field',
        }}
      />
    </div>
    <pre className='storybook__guide'>
      {`  
        <Input
          placeholder='Enter the email ...'
          defaultValue=''
          name='email'
          isError
        />
      `}
    </pre>
    <div className='storybook__input-group'>
      <p>TextArea</p>
      <Input
        placeholder='Enter the post description ...'
        defaultValue=''
        name='text'
        typeInput='textarea'
      />
    </div>
    <pre className='storybook__guide'>
      {`  
        <Input
          placeholder='Enter the post description ...'
          defaultValue=''
          name='text'
          typeInput='textarea'
        />
      `}
    </pre>
    <div className='storybook__input-group'>
      <p>TextArea Error</p>
      <Input
        placeholder='Enter the post description ...'
        defaultValue=''
        name='text'
        typeInput='textarea'
        error={{
          text: 'Required field',
        }}
      />
    </div>
    <pre className='storybook__guide'>
      {`  
        <Input
          placeholder='Enter the post description ...'
          defaultValue=''
          name='text'
          typeInput='textarea'
          isError
        />
      `}
    </pre>
  </div>
))
