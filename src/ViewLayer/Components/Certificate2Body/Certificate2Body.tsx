import React from 'react'

import { getClasses } from 'yourails_common'
import { getSlug } from 'yourails_common'
import { getNameString } from 'yourails_common'
import {
  Certificate2BodyComponentPropsType,
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
} from './Certificate2BodyTypes'

/**
 * @description Component to render Certificate2Body
 * @import import { Certificate2Body, Certificate2BodyPropsType, Certificate2BodyPropsOutType, Certificate2BodyType } 
             from '../Components/Certificate2Body/Certificate2Body'
 */
const Certificate2BodyComponent: Certificate2BodyComponentType = (
  props: Certificate2BodyComponentPropsType
) => {
  const { classAdded, language, profile, tagCloud, expertiseInfo } = props

  const count = tagCloud.count
  const completed = tagCloud.completed

  const documentName = expertiseInfo.documentName
  let levelName = expertiseInfo.name
  if (count === completed) levelName = 'Course Finished'

  const tagID = tagCloud.tagID
  const dateCreated = tagCloud.dateCreated
  const institution = 'YouRails Academy'
  const tagValue = tagCloud.value

  const nameFirstLearner = profile.nameFirst
  const nameLastLearner = profile.nameLast
  const nameMiddleLearner = profile.nameMiddle

  const documentSlug = getSlug(tagValue)
  const documentPathName = `/q/${tagID}/${documentSlug}`

  const date = new Date(dateCreated)

  const nameLearner = getNameString({
    nameFirst: nameFirstLearner,
    nameLast: nameLastLearner,
    nameMiddle: nameMiddleLearner,
  })

  const propsOut: Certificate2BodyPropsOutType = {}

  return (
    <div className={getClasses('Certificate2Body', classAdded)}>
      <div className='_sectionWrapper'>
        <h2 className='_title'>{documentName}</h2>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_awardedTo'>Awarded to</div>
        <div className='_nameLearner'>{nameLearner}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_labelAchievement'>
          in recognition of achievements at the level of&nbsp;<b>{levelName}</b>&nbsp;in the
          following subject
        </div>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_courseCapture'>{tagValue}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_labelAchievement'>
          for successfully completing&nbsp;<b>{completed}&nbsp;modules</b>&nbsp;in the comprehensive
          training program at
        </div>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_institution'>{institution}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_dateCompleted'>
          Awarded this {date.getDate()} day of {date.toLocaleString('default', { month: 'long' })},{' '}
          {date.getFullYear()} year.{' '}
        </div>
        <div className='_labelDocument'>
          Certificate No&nbsp;
          <a className='_documentLink' href={documentPathName} target='_blank'>
            {tagID}
          </a>
        </div>
      </div>

      <div className='_stamp'></div>
    </div>
  )
}

export const Certificate2Body: Certificate2BodyType = React.memo(Certificate2BodyComponent)

export type {
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
}
