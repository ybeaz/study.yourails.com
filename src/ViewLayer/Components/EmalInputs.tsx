import React from 'react'
import { useSelector } from 'react-redux'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { InputYrl } from '../ComponentsLibrary/InputYrl/InputYrl'
import { ButtonYrl } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'

interface EmalInputsArgs {
  documentID: string
}

export const EmalInputs: React.FunctionComponent<EmalInputsArgs> = props => {
  const { documentID } = props

  const store = useSelector((store2: RootStoreType) => store2)

  const {
    documents,
    forms: { sendTo, sendCc },
  } = store

  const documentsLen = documents.length
  let documentDefault = {
    meta: {
      email: '',
      isSendingBcc: false,
    },
  }
  const {
    meta: { email: emailBcc = '', isSendingBcc = false },
  } = (documentsLen && documents[documentsLen - 1]) || documentDefault

  const inputEmailToProps = {
    classAdded: 'Input_email',
    key: 'InputEmailToKey',
    type: 'text',
    placeholder: 'email...',
    typeEvent: 'ONCHANGE_EMAIL_TO',
    storeFormProp: 'sendTo',
  }

  const inputEmailCcProps = {
    classAdded: 'Input_email',
    key: 'InputEmailCcKey',
    type: 'text',
    placeholder: 'email cc...',
    typeEvent: 'ONCHANGE_EMAIL_CC',
    storeFormProp: 'sendCc',
  }

  const buttonForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward',
    action: {
      typeEvent: 'SEND_EMAIL_DOCUMENT',
      data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
    },
  }

  return (
    <div className='EmalInputs'>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>Email to send document*</label>
          <InputYrl {...inputEmailToProps} />
        </div>
        <div className='_group'>
          <label className='_label'>Email CC</label>
          <InputYrl {...inputEmailCcProps} />
        </div>
        <div className='_buttons'>
          {/* <ButtonYrl {...buttonCancelProps} /> */}
          <ButtonYrl {...buttonForwardProps} />
        </div>
      </form>
    </div>
  )
}
