import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const PLUS_QUESTION_SLIDE: ActionEventType = (event, data: any) => {
  dispatch(actionSync.PLUS_QUESTION_SLIDE(data))
}
