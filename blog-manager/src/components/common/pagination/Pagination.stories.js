import React from 'react'
import { storiesOf } from '@storybook/react'

// Import component Pagination
import Pagination from './index'

// Defined storybook for Pagination
storiesOf('Pagination', module)
  .addDecorator(story => <div style={{ margin: '0 30px' }}>{story()}</div>)
  .add('Pagination style', () => (
    <>
      <h4 className='storybook__title'>Pagination</h4>
      <p className='storybook__description'>Types</p>
      <div className='storybook__pagination'>
        <Pagination
          getListPosts={event => {
            console.log('Page: ', event.target)
          }}
        />
      </div>
      <pre className='storybook__guide'>
        {`
          <Pagination
            getListPosts={event => {
              console.log('Page: ', event.target)
            }}
          />
        `}
      </pre>
    </>
  ))
