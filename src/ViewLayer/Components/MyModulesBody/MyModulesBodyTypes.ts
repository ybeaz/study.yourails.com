import React from 'react'

import { TimerPropsType } from '../Timer/Timer'
import {
  HandleEventPropsType,
  ImageYrlPropsType,
  IconYrlPropsType,
  ButtonYrlPropsType,
  InputGroupYrlPropsType,
} from 'yourails_common'
import { PaginationNavigationPropsType } from '../../Components/'
import { MyModulesTablePropsType } from '../MyModulesTable/MyModulesTable'

import { RootStoreType } from '../../../Interfaces/'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type StagesType = {
  name: string
  isActive: boolean
  action: HandleEventPropsType
  status: CreateModuleStatusEnumType
  timeCalculated: RootStoreType['componentsState']['createModuleStages'][CreateModuleStagesEnumType]['timeCalculated']
}

export type GetModuleCreateStagesPropsType = {
  createModuleStages: RootStoreType['componentsState']['createModuleStages']
}

export interface GetModuleCreateStagesType {
  (props: GetModuleCreateStagesPropsType): StagesType[]
}

export type StagesPropsOut = {
  iconToDoProps: IconYrlPropsType
  imagePendingProps: ImageYrlPropsType
  timerProps: TimerPropsType
  iconSuccessProps: IconYrlPropsType
  iconFailedProps: IconYrlPropsType
  buttonRepeatProps: ButtonYrlPropsType
}

export type MyModulesBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  createModuleStages: RootStoreType['componentsState']['createModuleStages']
  moduleCreateProgress: RootStoreType['moduleCreateProgress']
  modules: RootStoreType['modules']
  isShowModuleCreateProgress: boolean
  storeStateSlice: {
    pageModules: RootStoreType['componentsState']['pagination']['pageModules']
  }
  handleEvents: HandleEventType
}

export type MyModulesBodyPropsType = Omit<
  MyModulesBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type MyModulesBodyPropsOutType = {
  inputGroupProps: InputGroupYrlPropsType
  myModulesTableProps: MyModulesTablePropsType
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { MyModulesBodyComponentPropsType, MyModulesBodyPropsType, MyModulesBodyPropsOutType, MyModulesBodyComponentType, MyModulesBodyType } from './MyModulesBodyTypes'
 */
export interface MyModulesBodyComponentType
  extends React.FunctionComponent<MyModulesBodyComponentPropsType> {
  (props: MyModulesBodyComponentPropsType): React.ReactElement
}

export type MyModulesBodyType = React.FunctionComponent<MyModulesBodyPropsType>
