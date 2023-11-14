import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_USER_MEDIA: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userMedia: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
