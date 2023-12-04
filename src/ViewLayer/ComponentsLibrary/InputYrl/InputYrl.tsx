import React, { useRef } from 'react'

import { useSelector } from 'react-redux'
import { getClasses } from '../../../Shared/getClasses'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { UserType } from '../../../Interfaces/UserType'
import {
  RootStoreType,
  FormsType,
  SearchFormSepType,
} from '../../../Interfaces/RootStoreType'
import { IconYrl } from '../IconYrl/IconYrl'

import {
  InputYrlPropsType,
  InputYrlPropsOutType,
  InputYrlComponentType,
  InputYrlType,
} from './InputYrlTypes'

/**
 * @description Component to render InputYrl
 * @propsOut 
    inputYrlProps: {
      classAdded: 'Input_passwordAuth',
      type: 'text',
      placeholder: 'myPlaceholder',
      typeEvent: 'ONCHANGE_USER_PASSWORD_AUTH_2',
      storeFormGroup: 'user',
      storeFormProp: 'userPasswordAuth2',
    },
 * @import import { InputYrl, InputYrlPropsType, InputYrlType } 
             from '../ComponentsLibrary/'
 */
const InputYrlComponent: InputYrlComponentType = (props: InputYrlPropsType) => {
  const {
    tagName = 'input',
    classAdded,
    key,
    type,
    placeholder,
    typeEvent,
    storeFormGroup,
    storeFormProp,
    accept,
  } = props

  const store = useSelector((store2: RootStoreType) => store2)
  const { forms } = store

  let value: string | number | string[] = ''

  if (storeFormGroup === 'searchFormSep' && storeFormProp) {
    const searchFormSepKey = storeFormProp as keyof SearchFormSepType
    value = forms[storeFormGroup][searchFormSepKey]
  }
  if (
    (storeFormGroup === 'user' || storeFormGroup === 'userPrev') &&
    storeFormProp
  ) {
    const userKey = storeFormProp as keyof UserType
    value = forms[storeFormGroup][userKey] as any
  } else if (storeFormProp) {
    const formsKey = storeFormProp as keyof FormsType
    value = forms[formsKey] as any
  }

  const action = { typeEvent }

  const iconReactProps = {
    icon: 'AiFillCloseCircle',
    icon2: 'null',
    classAdded: 'IconYrl_Input',
  }

  const inputRef = useRef(null)
  const textareaRef = useRef(null)

  // TODO Make click programmaticaly from another element to change default label
  // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
  // const handleClick = () => {
  //   inputFileRef.current.type = type
  //   inputFileRef.current.onInput()
  // }

  const propsOut: InputYrlPropsOutType = {}

  return (
    <div className={getClasses(`InputYrl`, classAdded)}>
      <div className='__form'>
        {tagName === 'input' && (
          <input
            className={'__input _hidden'}
            key={key}
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            value={value}
            accept={accept}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleEvents(event, action)
            }
          />
        )}
        {tagName === 'textarea' && (
          <textarea
            className={'__input'}
            key={key}
            ref={textareaRef}
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleEvents(event, action)
            }
            defaultValue={value}
          />
        )}
      </div>
      <span
        className='_iconClose'
        onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
          handleEvents({ target: { value: '' } }, action)
        }
      >
        <IconYrl {...iconReactProps} />
      </span>
    </div>
  )
}

export const InputYrl: InputYrlType = React.memo(InputYrlComponent)

export type {
  InputYrlPropsType,
  InputYrlPropsOutType,
  InputYrlComponentType,
  InputYrlType,
}
