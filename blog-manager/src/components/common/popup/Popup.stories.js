import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import component Popup
import Popup from './index'

const btnAction = action('button-click')

// Defined storybook for Popup
storiesOf('Popup', module).add('Popup', () => (
  <div className='storybook'>
    <h4 className='storybook__title'>Popup</h4>
    <div className='storybook__component' style={{ margin: '0 auto' }}>
      <Popup
        title='Are you delete this comment ?'
        toggleModal={btnAction}
        onSubmit={btnAction}
        btnSubmit='Delete'
        btnCancel='Cancel'
      />
    </div>
    <pre className='storybook__guide'>
      {`
        <Popup
          title='Are you delete this comment ?'
          toggleModal={btnAction}
          onSubmit={btnAction}
          btnSubmit='Delete'
          btnCancel='Cancel'
        />
      `}
    </pre>
  </div>
))
