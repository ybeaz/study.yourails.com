import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SEP_SELECT_SORT_BY: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { searchFormSep } = forms
  const searchFormSepNext = { ...searchFormSep, selectSortBy: data }
  const formsNext = { ...forms, searchFormSep: searchFormSepNext }
  return { ...store, forms: formsNext }
}
