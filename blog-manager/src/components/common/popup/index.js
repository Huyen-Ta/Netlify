// @flow
import * as React from 'react'

// Component
import Button from '../button'

type Props = {|
  title: String,
  btnSubmit: String,
  btnCancel: String,
  headerPopup?: String,
  isDisabled?: Boolean,

  toggleModal: () => void,
  onSubmit: () => void,
  children?: React.Node,
|}

// Define component popup
const Popup = ({
  title,
  toggleModal,
  onSubmit,
  isDisabled,
  btnSubmit,
  btnCancel,
  children,
  headerPopup,
}: Props) => (
  <div className='modal-container'>
    <div className='modal'>
      <div className='modal-header'>
        <h4 className='title'>
          {headerPopup ? headerPopup : 'Confirmation popup'}
        </h4>
      </div>
      <div className='modal-body'>
        <p className='title'>{title}</p>
        {children}
      </div>

      <div className='modal-footer'>
        <Button
          className='btn-submit btn-success'
          text={btnSubmit}
          onClick={onSubmit}
          isDisabled={isDisabled}
        />

        <Button
          text={btnCancel}
          onClick={toggleModal}
          isDisabled={isDisabled}
          className='btn-cancel'
        />
      </div>
    </div>
    <div role='presentation' className='modal-backdrop' onClick={toggleModal} />
  </div>
)

// Defined default Props
Popup.defaultProps = {
  title: '',
}

export default Popup
