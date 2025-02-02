import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_MODULES: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_MODULES(data))

  if (data && data[0]?.moduleID)
    dispatch(actionSync.SET_MODULE_ID_ACTIVE({ moduleID: data && data[0].moduleID }))
}
