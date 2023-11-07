import React from 'react'

import { handleEvents } from '../../DataLayer/index.handleEvents'

interface ReaderArgs {
  contentID: string
  isVisible: boolean
  screenType?: string
  children: React.ReactChildren
}

export const ReaderIframe: React.FunctionComponent<ReaderArgs> = props => {
  const { contentID, isVisible, screenType } = props

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  const classAdded =
    screenType === 'AcademyPresent' ? 'ReaderIframe_AcademyPresent' : ''

  return (
    <div className={`ReaderIframe ${classAdded}`}>
      <div className={`__wrapper ${isVisibleClass}`}>
        <iframe
          className='_reader'
          src={`${contentID}`}
          width='640'
          height='340'
          frameBorder='0'
          onLoad={event =>
            handleEvents(event, {
              typeEvent: 'TOGGLE_MEDIA_LOADED',
              data: { mediaKey: contentID, isMediaLoaded: true },
            })
          }
        ></iframe>
        {props.children[0]}
      </div>
      <div className='__panel'>{props.children[1]}</div>
    </div>
  )
}
