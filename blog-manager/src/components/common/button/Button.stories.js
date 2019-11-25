import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import component Button
import Button from './index'

const btnAction = action('button-click')

// Defined storybook for Button
storiesOf('Button', module).add('Button Default', () => (
  <div className='storybook button--wrapper'>
    <h4 className='storybook__title'>Button Default</h4>
    <Button onClick={btnAction} className='btn-submit' text='Submit' />
    <pre className='storybook__guide'>
      {`
          <Button onClick={btnAction}>Submit</Button>
        `}
    </pre>
    <h4 className='storybook__title'>Button Disabled</h4>
    <Button isDisabled onClick={btnAction} text='Disabled' />
    <pre className='storybook__guide'>
      {`
          <Button isDisabled onClick={btnAction}>Disabled</Button>
        `}
    </pre>
  </div>
))
