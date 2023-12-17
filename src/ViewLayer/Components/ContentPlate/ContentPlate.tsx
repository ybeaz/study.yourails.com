import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getSlug } from '../../../Shared/getSlug'
import { PlayerPanel } from '../PlayerPanel'
import { LoaderBlurhash } from '../LoaderBlurhash'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerIframe } from '../../Frames/PlayerIframe/PlayerIframe'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'

const COMPONENT: Record<string, FunctionComponent<any>> = {
  ReaderIframe,
  PlayerIframe,
}

import {
  ContentPlateComponentPropsType,
  ContentPlatePropsType,
  ContentPlatePropsOutType,
  ContentPlateComponentType,
  ContentPlateType,
} from './ContentPlateTypes'

/**
 * @description Component to render ContentPlate
 * @import import { ContentPlate, ContentPlatePropsType, ContentPlatePropsOutType, ContentPlateType } 
             from '../Components/ContentPlate/ContentPlate'
 */
const ContentPlateComponent: ContentPlateComponentType = (
  props: ContentPlateComponentPropsType
) => {
  const {
    classAdded,
    contentComponentName,
    courseID,
    courseCapture,
    moduleCapture,
    durationObj,
    moduleID,
    contentID,
    screenType,
    storeStateSlice: { language, mediaLoaded },
  } = props

  const isVisible = mediaLoaded[contentID]

  const { width, height } = VIDEO_RESOLUTION
  const { isShowingPlay } = useYouTubePlayerWork({
    contentComponentName,
    contentID,
    width,
    height,
  })

  const slug = getSlug(courseCapture)
  const pathname = `/m/${moduleID}/${slug}`

  const CONTENT_ASSIGNED_COMPONENT: FunctionComponent =
    COMPONENT[contentComponentName]

  const propsOut: ContentPlatePropsOutType = {
    contentComponentProps: {
      ReaderIframe: {
        contentID,
        isVisible,
      },
      PlayerIframe: {
        contentID,
        isVisible,
      },
    },
    loaderBlurhashProps: {
      isVisibleBlurHash: !isVisible,
      textTooltip: DICTIONARY['pleaseWait'][language],
      isTextTooltip: true,
      delay: 10000,
      contentComponentName: 'AcademyMatrix',
    },
    playerPanelProps: {
      courseCapture,
      moduleCapture,
      durationObj,
      screenType,
      isShowingPlay,
      isActionButtonDisplaying: true,
    },
    linkProps: {
      className: '__shield',
      to: { pathname },
      onClick: (event: any) =>
        handleEvents(event, {
          typeEvent: 'SELECT_COURSE_MODULE',
          data: { courseCapture, courseID, moduleID, contentID },
        }),
    },
  }

  return (
    <div className={getClasses('ContentPlate')} key={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT
        {...propsOut.contentComponentProps[contentComponentName]}
      >
        <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
        <PlayerPanel {...propsOut.playerPanelProps} />
      </CONTENT_ASSIGNED_COMPONENT>
      <Link {...propsOut.linkProps} />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'mediaLoaded']
export const ContentPlate = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ContentPlateComponent)
)

export type {
  ContentPlatePropsType,
  ContentPlatePropsOutType,
  ContentPlateComponentType,
  ContentPlateType,
}
