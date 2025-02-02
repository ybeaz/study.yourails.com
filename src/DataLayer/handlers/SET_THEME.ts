import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_THEME: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_THEME(data))
}
