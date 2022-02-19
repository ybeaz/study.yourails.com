import { IRootStore } from '../Interfaces/IRootStore'

import { TEMPLATE } from './reducers/TEMPLATE'
import { SELECT_USER_MEDIA } from './reducers/SELECT_USER_MEDIA'
import { SELECT_USER_GENDER } from './reducers/SELECT_USER_GENDER'
import { ONCHANGE_USER_BIRTH_YEAR } from './reducers/ONCHANGE_USER_BIRTH_YEAR'
import { SELECT_USER_LANGUAGES } from './reducers/SELECT_USER_LANGUAGES'
import { SELECT_USER_COUNTRY } from './reducers/SELECT_USER_COUNTRY'
import { ONCHANGE_USER_NAME_FIRST } from './reducers/ONCHANGE_USER_NAME_FIRST'
import { ONCHANGE_USER_INFO_ABOUT } from './reducers/ONCHANGE_USER_INFO_ABOUT'
import { SELECT_SKILLS_EXPERTISE } from './reducers/SELECT_SKILLS_EXPERTISE'
import { GET_AVATAR_PATH } from './reducers/GET_AVATAR_PATH'
import { SET_SEARCH_INPUT } from './reducers/SET_SEARCH_INPUT'
import { SET_IS_ADVANCED_SEARCH } from './reducers/SET_IS_ADVANCED_SEARCH'
import { SEP_SELECT_SKILLS_OFFERED } from './reducers/SEP_SELECT_SKILLS_OFFERED'
import { SEP_SELECT_SKILLS_REQUIRED } from './reducers/SEP_SELECT_SKILLS_REQUIRED'
import { SEP_SELECT_COUNTRY_REQUIRED } from './reducers/SEP_SELECT_COUNTRY_REQUIRED'
import { SEP_SELECT_LANGUAGE_REQUIRED } from './reducers/SEP_SELECT_LANGUAGE_REQUIRED'
import { SEP_INPUT_AGE_FROM_REQUIRED } from './reducers/SEP_INPUT_AGE_FROM_REQUIRED'
import { SEP_INPUT_AGE_TO_REQUIRED } from './reducers/SEP_INPUT_AGE_TO_REQUIRED'
import { SEP_SELECT_GENDER_REQUIRED } from './reducers/SEP_SELECT_GENDER_REQUIRED'
import { SEP_SELECT_MEDIA_REQUIRED } from './reducers/SEP_SELECT_MEDIA_REQUIRED'
import { SEP_INPUT_DESCRIPTION_REQUIRED } from './reducers/SEP_INPUT_DESCRIPTION_REQUIRED'
import { SEP_SELECT_SORT_BY } from './reducers/SEP_SELECT_SORT_BY'
import { SET_THEME } from './reducers/SET_THEME'
import { SET_OAUTH_STAGE } from './reducers/SET_OAUTH_STAGE'
import { SET_OAUTH_FB_SCRIPT_STATE } from './reducers/SET_OAUTH_FB_SCRIPT_STATE'
import { SET_OAUTH_VK_SCRIPT_STATE } from './reducers/SET_OAUTH_VK_SCRIPT_STATE'
import { SET_OAUTH_GOOGLE_SCRIPT_STATE } from './reducers/SET_OAUTH_GOOGLE_SCRIPT_STATE'
import { SET_USER_PROFILE } from './reducers/SET_USER_PROFILE'
import { ONCHANGE_USER_NAME_AUTH } from './reducers/ONCHANGE_USER_NAME_AUTH'
import { ONCHANGE_PASSWORD_AUTH_2 } from './reducers/ONCHANGE_PASSWORD_AUTH_2'
import { ONCHANGE_EMAIL_AUTH } from './reducers/ONCHANGE_EMAIL_AUTH'
import { ONCHANGE_PASSWORD_AUTH } from './reducers/ONCHANGE_PASSWORD_AUTH'
import { SET_MODAL_FRAMES } from './reducers/SET_MODAL_FRAMES'
import { GET_COURSE_QUERY_PR_QN } from './reducers/GET_COURSE_QUERY_PR_QN'
import { SAVE_ANALYTICS_SUCCESS } from './reducers/SAVE_ANALYTICS_SUCCESS'
import { TOGGLE_MEDIA_LOADED } from './reducers/TOGGLE_MEDIA_LOADED'
import { TOGGLE_START_COURSE } from './reducers/TOGGLE_START_COURSE'
import { ONCHANGE_SEARCH_INPUT } from './reducers/ONCHANGE_SEARCH_INPUT'
import { CHANGE_NUM_QUESTIONS_IN_SLIDE } from './reducers/CHANGE_NUM_QUESTIONS_IN_SLIDE'
import { SELECT_LANGUAGE_APP } from './reducers/SELECT_LANGUAGE_APP'
import { TOGGLE_LOADER_OVERLAY } from './reducers/TOGGLE_LOADER_OVERLAY'
import { TOGGLE_IS_DOCUMENT_ADDED } from './reducers/TOGGLE_IS_DOCUMENT_ADDED'
import { ADD_DOCUMENT_SUCCESS } from './reducers/ADD_DOCUMENT_SUCCESS'
import { SET_QUESTION_SLIDE } from './reducers/SET_QUESTION_SLIDE'
import { PLUS_QUESTION_SLIDE } from './reducers/PLUS_QUESTION_SLIDE'
import { ONCHANGE_EMAIL_CC } from './reducers/ONCHANGE_EMAIL_CC'
import { ONCHANGE_EMAIL_TO } from './reducers/ONCHANGE_EMAIL_TO'
import { ONCHANGE_FIRST_NAME_MODAL } from './reducers/ONCHANGE_FIRST_NAME_MODAL'
import { ONCHANGE_MIDDLE_NAME_MODAL } from './reducers/ONCHANGE_MIDDLE_NAME_MODAL'
import { ONCHANGE_LAST_NAME_MODAL } from './reducers/ONCHANGE_LAST_NAME_MODAL'
import { GET_ANSWERS_DEFAULT } from './reducers/GET_ANSWERS_DEFAULT'
import { SELECT_COURSE_MODULE_CONTENTID } from './reducers/SELECT_COURSE_MODULE_CONTENTID'
import { SELECT_COURSE_MODULE } from './reducers/SELECT_COURSE_MODULE'
import { CLICK_CHECK } from './reducers/CLICK_CHECK'
import { GET_CONTENT_DATA_SUCCESS } from './reducers/GET_CONTENT_DATA_SUCCESS'
import { TOGGLE_SIDE_NAVIGATION } from './reducers/TOGGLE_SIDE_NAVIGATION'
import { GET_GLOBAL_VARS_SUCCESS } from './reducers/GET_GLOBAL_VARS_SUCCESS'
import { rootStoreDefault } from './rootStoreDefault'

export interface IIndexReducer {
  (store: IRootStore, action: any): any
}

export const indexReducer: IIndexReducer = (
  store = rootStoreDefault,
  action = { type: 'DEFAULT' }
) => {
  const { type, data } = action

  const output = {
    TEMPLATE,
    SELECT_USER_MEDIA,
    SELECT_USER_GENDER,
    ONCHANGE_USER_BIRTH_YEAR,
    SELECT_USER_LANGUAGES,
    SELECT_USER_COUNTRY,
    ONCHANGE_USER_NAME_FIRST,
    ONCHANGE_USER_INFO_ABOUT,
    SELECT_SKILLS_EXPERTISE,
    GET_AVATAR_PATH,
    SET_SEARCH_INPUT,
    SET_IS_ADVANCED_SEARCH,
    SEP_SELECT_SKILLS_OFFERED,
    SEP_SELECT_SKILLS_REQUIRED,
    SEP_SELECT_COUNTRY_REQUIRED,
    SEP_SELECT_LANGUAGE_REQUIRED,
    SEP_INPUT_AGE_FROM_REQUIRED,
    SEP_INPUT_AGE_TO_REQUIRED,
    SEP_SELECT_GENDER_REQUIRED,
    SEP_SELECT_MEDIA_REQUIRED,
    SEP_INPUT_DESCRIPTION_REQUIRED,
    SEP_SELECT_SORT_BY,
    SET_THEME,
    SET_OAUTH_STAGE,
    SET_OAUTH_FB_SCRIPT_STATE,
    SET_OAUTH_VK_SCRIPT_STATE,
    SET_OAUTH_GOOGLE_SCRIPT_STATE,
    SET_USER_PROFILE,
    ONCHANGE_USER_NAME_AUTH,
    ONCHANGE_EMAIL_AUTH,
    ONCHANGE_PASSWORD_AUTH,
    ONCHANGE_PASSWORD_AUTH_2,
    SET_MODAL_FRAMES,
    GET_COURSE_QUERY_PR_QN,
    SAVE_ANALYTICS_SUCCESS,
    TOGGLE_MEDIA_LOADED,
    TOGGLE_START_COURSE,
    ONCHANGE_SEARCH_INPUT,
    CHANGE_NUM_QUESTIONS_IN_SLIDE,
    SELECT_LANGUAGE_APP,
    TOGGLE_LOADER_OVERLAY,
    TOGGLE_IS_DOCUMENT_ADDED,
    ADD_DOCUMENT_SUCCESS,
    SET_QUESTION_SLIDE,
    PLUS_QUESTION_SLIDE,
    ONCHANGE_EMAIL_CC,
    ONCHANGE_EMAIL_TO,
    ONCHANGE_FIRST_NAME_MODAL,
    ONCHANGE_MIDDLE_NAME_MODAL,
    ONCHANGE_LAST_NAME_MODAL,
    GET_ANSWERS_DEFAULT,
    SELECT_COURSE_MODULE_CONTENTID,
    SELECT_COURSE_MODULE,
    CLICK_CHECK,
    GET_CONTENT_DATA_SUCCESS,
    TOGGLE_SIDE_NAVIGATION,
    GET_GLOBAL_VARS_SUCCESS,
  }

  return output[type] ? output[type](store, data) : store
}
