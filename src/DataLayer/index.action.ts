import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'

// Synchroneours redux actions
const ACTIONS_SYNC: string[] = [
  'SET_THEME',
  'SET_OAUTH_STAGE',
  'SET_OAUTH_FB_SCRIPT_STATE',
  'SET_OAUTH_VK_SCRIPT_STATE',
  'SET_OAUTH_GOOGLE_SCRIPT_STATE',
  'SET_USER',
  'CLICK_SIGN_UP',
  'ONCHANGE_USER_NAME_AUTH',
  'ONCHANGE_EMAIL_AUTH',
  'ONCHANGE_PASSWORD_AUTH',
  'ONCHANGE_PASSWORD_AUTH_2',
  'SET_MODAL_FRAMES',
  'GET_INITIAL_QUERY_SETTING',
  'GET_COURSE_QUERY_PR_QN',
  'TOGGLE_MEDIA_LOADED',
  'TOGGLE_START_COURSE',
  'ONCHANGE_SEARCH_INPUT',
  'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  'SELECT_LANGUAGE',
  'ONCHANGE_EMAIL_CC',
  'ONCHANGE_EMAIL_TO',
  'TOGGLE_IS_DOCUMENT_ADDED',
  'TOGGLE_LOADER_OVERLAY',
  'SET_QUESTION_SLIDE',
  'PLUS_QUESTION_SLIDE',
  'ONCHANGE_FIRST_NAME_MODAL',
  'ONCHANGE_MIDDLE_NAME_MODAL',
  'ONCHANGE_LAST_NAME_MODAL',
  'GET_ANSWERS_DEFAULT',
  'SELECT_COURSE_MODULE_CONTENTID',
  'SELECT_COURSE_MODULE',
  'CLICK_CHECK',
  'TOGGLE_SIDE_NAVIGATION',
]

// Asynchroneous actions for saga
const ACTION_ASYNC: string[] = [
  'GET_OAUTH_UI_DATA',
  'GET_OAUTH_GOOGLE',
  'GET_AUTH_WEB_TOKEN',
  'GET_AUTH_SIGN_IN',
  'GET_AUTH_SIGN_UP',
  'SAVE_ANALYTICS',
  'SEND_EMAIL_DOCUMENT',
  'FIND_DOCUMENT',
  'ADD_DOCUMENT',
  'GET_CONTENT_DATA',
  'GET_GLOBAL_VARS',
]

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)

// Example of the sync action
// export const TEST_ACTION: Function = (data: any = true): IAction => ({
//   type: 'TEST_ACTION',
//   data,
// })
