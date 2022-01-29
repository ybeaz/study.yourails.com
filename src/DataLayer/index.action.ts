import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'

// Synchroneours redux actions
const ACTIONS_SYNC: string[] = [
  'GET_AVATAR_PATH',
  'SELECT_LANGUAGE_APP',
  'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  'CLICK_CHECK',
  'CLICK_SIGN_UP',
  'GET_ANSWERS_DEFAULT',
  'GET_COURSE_QUERY_PR_QN',
  'ONCHANGE_EMAIL_AUTH',
  'ONCHANGE_EMAIL_CC',
  'ONCHANGE_EMAIL_TO',
  'ONCHANGE_FIRST_NAME_MODAL',
  'ONCHANGE_LAST_NAME_MODAL',
  'ONCHANGE_MIDDLE_NAME_MODAL',
  'ONCHANGE_PASSWORD_AUTH_2',
  'ONCHANGE_PASSWORD_AUTH',
  'ONCHANGE_SEARCH_INPUT',
  'ONCHANGE_USER_NAME_AUTH',
  'PLUS_QUESTION_SLIDE',
  'SELECT_COURSE_MODULE_CONTENTID',
  'SELECT_COURSE_MODULE',
  'SEP_CLICK_BUTTON_SEARCH',
  'SEP_INPUT_AGE_FROM_REQUIRED',
  'SEP_INPUT_AGE_TO_REQUIRED',
  'SEP_INPUT_DESCRIPTION_REQUIRED',
  'SEP_SELECT_COUNTRY_REQUIRED',
  'SEP_SELECT_GENDER_REQUIRED',
  'SEP_SELECT_LANGUAGE_REQUIRED',
  'SEP_SELECT_MEDIA_REQUIRED',
  'SEP_SELECT_SKILLS_OFFERED',
  'SEP_SELECT_SKILLS_REQUIRED',
  'SEP_SELECT_SORT_BY',
  'SET_IS_ADVANCED_SEARCH',
  'SELECT_LANGUAGE_APP_INIT',
  'SET_MODAL_FRAMES',
  'SET_OAUTH_FB_SCRIPT_STATE',
  'SET_OAUTH_GOOGLE_SCRIPT_STATE',
  'SET_OAUTH_STAGE',
  'SET_OAUTH_VK_SCRIPT_STATE',
  'SET_QUESTION_SLIDE',
  'SET_SEARCH_INPUT',
  'SET_THEME',
  'SET_USER_PROFILE',
  'TOGGLE_IS_DOCUMENT_ADDED',
  'TOGGLE_LOADER_OVERLAY',
  'TOGGLE_MEDIA_LOADED',
  'TOGGLE_SIDE_NAVIGATION',
  'TOGGLE_START_COURSE',
]

// Asynchroneous actions for saga
const ACTION_ASYNC: string[] = [
  'ADD_DOCUMENT',
  'FIND_DOCUMENT',
  'GET_AUTH_SIGN_IN',
  'GET_AUTH_SIGN_UP',
  'GET_AUTH_WEB_TOKEN',
  'GET_CONTENT_DATA',
  'GET_GLOBAL_VARS',
  'GET_OAUTH_GOOGLE',
  'GET_OAUTH_UI_DATA',
  'SAVE_ANALYTICS',
  'SEND_EMAIL_DOCUMENT',
]

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)

// Example of the sync action
// export const TEST_ACTION: Function = (data: any = true): IAction => ({
//   type: 'TEST_ACTION',
//   data,
// })
