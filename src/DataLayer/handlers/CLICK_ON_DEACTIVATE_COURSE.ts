import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_DEACTIVATE_COURSE: ActionEventType = (event, data) => {
  dispatch(actionAsync.DEACTIVATE_COURSES.REQUEST(data))
}
