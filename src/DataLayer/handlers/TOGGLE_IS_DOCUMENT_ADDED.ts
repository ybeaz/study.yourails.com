import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_IS_DOCUMENT_ADDED: ActionEventType = (event, data) => {
  dispatch(actionSync.TOGGLE_IS_DOCUMENT_ADDED(data))
}
