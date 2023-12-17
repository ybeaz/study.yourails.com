import { createSyncActions, CreateSyncAction } from './createActionsSync'
import { createAsyncAction, CreateAsyncAction } from './createActionsAsync'

// Synchroneours redux actions
const ACTIONS_SYNC: string[] = [
  'SET_TAGS_STATE',
  'SET_PAGE_INFO',
  'SET_PAGE_CURSOR',
  'ADD_DOCUMENT',
  'SET_IS_LOADED_LOCAL_STORAGE_STORE_STATE',
  'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  'CLICK_CHECK',
  'CLICK_SIGN_UP',
  'GET_ANSWERS_DEFAULT',
  'GET_AVATAR_PATH',
  'GET_COGNITO_TOKENS_SUCCESS',
  'GET_COURSE_QUERY_PR_QN',
  'LOAD_PROFILES',
  'ONCHANGE_EMAIL_CC',
  'ONCHANGE_EMAIL_TO',
  'ONCHANGE_FIRST_NAME_MODAL',
  'ONCHANGE_LAST_NAME_MODAL',
  'ONCHANGE_MIDDLE_NAME_MODAL',
  'ONCHANGE_SEARCH_INPUT',
  'ONCHANGE_USER_BIRTH_YEAR',
  'ONCHANGE_USER_EMAIL',
  'ONCHANGE_USER_INFO_ABOUT',
  'ONCHANGE_USER_NAME_FIRST',
  'ONCHANGE_USER_NAME_NICK',
  'ONCHANGE_USER_NAME',
  'ONCHANGE_USER_PASSWORD_AUTH_2',
  'ONCHANGE_USER_PASSWORD_AUTH',
  'PLUS_QUESTION_SLIDE',
  'SELECT_COURSE_MODULE',
  'SELECT_LANGUAGE_APP_INIT',
  'SELECT_LANGUAGE_APP',
  'SELECT_SKILLS_EXPERTISE',
  'SELECT_USER_COUNTRY',
  'SELECT_USER_GENDER',
  'SELECT_USER_LANGUAGES',
  'SELECT_USER_MEDIA',
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
  'SET_AUTH_AWS_COGNITO_USER_DATA',
  'SET_COURSE_ID_ACTIVE',
  'SET_COURSES',
  'SET_IS_ADVANCED_SEARCH',
  'SET_MODAL_FRAMES',
  'SET_MODULE_ID_ACTIVE',
  'SET_OAUTH_FB_SCRIPT_STATE',
  'SET_OAUTH_GOOGLE_SCRIPT_STATE',
  'SET_OAUTH_STAGE',
  'SET_OAUTH_VK_SCRIPT_STATE',
  'SET_QUESTION_SLIDE',
  'SET_SEARCH_INPUT',
  'SET_SIDE_NAVIGATION_LEFT',
  'SET_STORE_STATE',
  'SET_THEME',
  'SET_USER_PROFILE',
  'SET_USERS',
  'TOGGLE_IS_DOCUMENT_ADDED',
  'TOGGLE_LOADER_OVERLAY',
  'TOGGLE_MEDIA_LOADED',
  'TOGGLE_START_COURSE',
]

// Asynchroneous actions for saga
const ACTION_ASYNC: string[] = [
  'CREATE_DOCUMENT',
  'FIND_DOCUMENT',
  'GET_AUTH_AWS_COGNITO_USER_DATA',
  'GET_AUTH_AWS_COGNITO_USER_REFRESHED',
  'GET_AUTH_AWS_COGNITO_USER_REVOKED',
  'GET_AUTH_SIGN_IN',
  'GET_AUTH_SIGN_UP',
  'GET_COGNITO_TOKENS',
  'GET_COURSES',
  'GET_MODULE_DATA',
  'GET_OAUTH_GOOGLE',
  'GET_OAUTH_UI_DATA',
  'INIT_LOADING',
  'READ_USER_AUTH',
  'READ_USERS',
  'SAVE_ANALYTICS',
  'SAVE_USER_PROFILE',
  'SEND_EMAIL_DOCUMENT',
]

export const actionSync: CreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: CreateAsyncAction = createAsyncAction(ACTION_ASYNC)

// Example of the sync action
// export const TEST_ACTION: Function = (data: any = true): ActionReduxType => ({
//   type: 'TEST_ACTION',
//   data,
// })
