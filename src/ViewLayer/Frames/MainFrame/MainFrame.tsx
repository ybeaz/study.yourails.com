import React from 'react'
import { LoaderOverlayYrl } from 'yourails_common'

import {
  MainFrameComponentPropsType,
  MainFramePropsType,
  MainFramePropsOutType,
  MainFrameComponentType,
  MainFrameType,
} from './MainFrameTypes'

/**
 * @description Component to render MainFrame
 * @import import { MainFrame, MainFramePropsType, MainFramePropsOutType, MainFrameType } 
             from '../Components/MainFrame/MainFrame'
 */
const MainFrameComponent: MainFrameComponentType = (props: MainFrameComponentPropsType) => {
  const { screenType, children } = props

  const classAdded = screenType ? `MainFrame_${screenType}` : ''

  return (
    <div className={`MainFrame ${classAdded}`}>
      <div className='__header'>{children[0]}</div>
      <div className='__middle'>
        <div className='_left'>{children[1]}</div>
        <div className='_main'>
          <div className='_wrapper'>{children[2]}</div>
        </div>
        <div className='_right'>{children[3]}</div>
      </div>
      <div className='__footer'>{children[4]}</div>
      <LoaderOverlayYrl />
    </div>
  )
}

export const MainFrame: MainFrameType = React.memo(MainFrameComponent)

export type {
  MainFrameComponentPropsType,
  MainFramePropsType,
  MainFramePropsOutType,
  MainFrameComponentType,
  MainFrameType,
}
