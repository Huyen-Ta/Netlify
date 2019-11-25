import React from 'react'
import { storiesOf } from '@storybook/react'

// Import component Indicator
import Indicator from './index'

// Defined storybook for Indicator
storiesOf('Indicator', module).add('Indicator', () => (
  <div className='storybook'>
    <h4 className='storybook__title'>Indicator</h4>
    <div className='storybook__component' style={{ margin: '0 auto' }}>
      <Indicator />
    </div>
    <pre className='storybook__guide'>
      {`
        <Indicator />
      `}
    </pre>
  </div>
))
