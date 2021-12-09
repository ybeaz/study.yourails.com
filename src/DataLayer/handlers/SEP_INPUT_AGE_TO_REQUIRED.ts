import { isParsableFloat } from '../../Shared/isParsableFloat'
import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch } = store

export const SEP_INPUT_AGE_TO_REQUIRED: IActionEvent = event => {
  const value = isParsableFloat(event.target.value)
    ? parseInt(event.target.value, 10)
    : ''
  dispatch(actionSync.SEP_INPUT_AGE_TO_REQUIRED(value))
}
