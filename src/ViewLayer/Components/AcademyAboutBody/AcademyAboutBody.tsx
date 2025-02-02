import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { YOURAILS_ORGANIZATION } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { buildData } from '../../../Constants/buildData.const'
import { getTagLine } from 'yourails_common'
import {
  AcademyAboutBodyComponentPropsType,
  AcademyAboutBodyPropsType,
  AcademyAboutBodyPropsOutType,
  AcademyAboutBodyComponentType,
  AcademyAboutBodyType,
} from './AcademyAboutBodyTypes'

/**
 * @description Component to render AcademyAboutBody
 * @import import { AcademyAboutBody, AcademyAboutBodyPropsType, AcademyAboutBodyPropsOutType, AcademyAboutBodyType } 
             from '../Components/AcademyAboutBody/AcademyAboutBody'
 */
const AcademyAboutBodyComponent: AcademyAboutBodyComponentType = (
  props: AcademyAboutBodyComponentPropsType
) => {
  const { classAdded, buildData, storeStateSlice } = props
  const {
    commit,
    author: { name, email },
    dateBuild,
    dateCommit,
    message,
    branchCurrent,
    copyright,
  } = buildData

  const { brand, description } = YOURAILS_ORGANIZATION

  const propsOut: AcademyAboutBodyPropsOutType = {}

  return (
    <div className={getClasses('AcademyAboutBody', classAdded)}>
      <h1 className='_titleBodyAbout'>About {brand}</h1>
      <div className='_aboutAcademyContent'>
        <div className='_paragraph'>{getTagLine()}</div>
        <div className='_paragraph'>{description}</div>
      </div>
      <div className='_sectionBuildData'>
        <h3 className='_titleTableBuild'>Current build</h3>
        <section className='_tableBuild'>
          <div className='_row'>
            <div className='_cell _cell_capture'>Date build</div>
            <div className='_cell _cell_text'>{dateBuild}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Date commit</div>
            <div className='_cell _cell_text'>{dateCommit}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Current branch</div>
            <div className='_cell _cell_text'>{branchCurrent}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Authors</div>
            <div className='_cell _cell_text'>{`${name}, ${email}`}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Message</div>
            <div className='_cell _cell_text'>{message}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Commit</div>
            <div className='_cell _cell_text'>{commit}</div>
          </div>
          <div className='_row'>
            <div className='_cell _cell_capture'>Copyright</div>
            <div className='_cell _cell_text'>{copyright}</div>
          </div>
        </section>
      </div>
      {/* Current build 
      branchCurrent B-0.64.0 
      date 2023-12-15 11:41 
      commit
      3109babec7d11586d76ae77a64957c687f86cb3f 
      message
      perf-develop-refactor-communication-layer-VII 
      © 2023 Roman Ches */}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const AcademyAboutBody = withPropsYrl({ buildData })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyAboutBodyComponent))
)

export type {
  AcademyAboutBodyPropsType,
  AcademyAboutBodyPropsOutType,
  AcademyAboutBodyComponentType,
  AcademyAboutBodyType,
}
