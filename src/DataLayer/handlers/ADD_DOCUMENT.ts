import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const ADD_DOCUMENT: IActionEvent = (event, data) => {
  const { courses } = getState()
  const options = getResultDataFromStore(courses)
  event?.preventDefault &&
    getSavedAnanlyticsEvent(
      event,
      getAzProps('PERSONAL_DATA_SUBMITTED')(options)
    )

  dispatch(actionAsync.ADD_DOCUMENT.REQUEST(data))
}
