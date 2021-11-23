import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_INPUT_DESCRIPTION_REQUIRED: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { searchFormSep } = forms
  const searchFormSepNext = { ...searchFormSep, inputDescriptionRequired: data }
  const formsNext = { ...forms, searchFormSep: searchFormSepNext }
  return { ...store, forms: formsNext }
}
