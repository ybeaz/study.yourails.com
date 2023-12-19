import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type DocumentsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    documents: RootStoreType['documents']
  }
  handleEvents: any
}

export type DocumentsPropsType = Omit<
  DocumentsComponentPropsType,
  'storeStateSlice'
>

export type DocumentsPropsOutType = Record<string, any>

/**
 * @import import { DocumentsComponentPropsType, DocumentsPropsType, DocumentsPropsOutType, DocumentsComponentType, DocumentsType } from './DocumentsTypes'
 */
export interface DocumentsComponentType
  extends React.FunctionComponent<DocumentsComponentPropsType> {
  (props: DocumentsComponentPropsType): React.ReactElement
}

export type DocumentsType = React.FunctionComponent<DocumentsPropsType>
