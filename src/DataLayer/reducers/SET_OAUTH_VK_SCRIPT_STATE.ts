import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_OAUTH_VK_SCRIPT_STATE: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isOAuthVKontakteScriptLoaded: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
