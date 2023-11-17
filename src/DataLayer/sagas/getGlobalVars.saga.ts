import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getConvertedType } from '../../Shared/getConvertedType'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getUserIdDataAwsCognito } from './getUserIdDataAwsCognitoSaga'
import { getRefreshedUserAuthAwsCognito } from './getRefreshedUserAuthAwsCognitoSaga'

function* getGlobalVars(args: any) {
  try {
    const languageStorage = getConvertedType(localStorage.getItem('language'))

    if (languageStorage) {
      yield put(actionSync.SELECT_LANGUAGE_APP(languageStorage))
    } else {
      const { language } = yield select(store => store)
      getSetObjToLocalStorage({ language })
    }

    console.info('getGlobalVars.saga [20]', {
      local: location,
      args,
      code: args?.data?.query?.code,
    })

    const code = args?.data?.query?.code

    const refresh_token = localStorage.getItem('refresh_token')

    console.info('getGlobalVars.saga [31]', { code })

    // if (code) {
    //   yield call(getUserIdDataAwsCognito, { data: { code } })
    // } else if (refresh_token) {
    //   yield call(getRefreshedUserAuthAwsCognito, { data: { refresh_token } })
    // }

    // const userWebTokenAuth = localStorage.getItem('userWebTokenAuth')

    // if (
    //   typeof userWebTokenAuth === 'string' &&
    //   userWebTokenAuth !== 'null' &&
    //   userWebTokenAuth !== 'undefined'
    // ) {
    //   yield put(actionAsync.GET_AUTH_WEB_TOKEN.REQUEST({ userWebTokenAuth }))
    // }

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }
  } catch (error: any) {
    console.info('getGlobalVars [31]', error.name + ': ' + error.message)
  }
}

export default function* getGlobalVarsSaga() {
  yield takeEvery([actionAsync.GET_GLOBAL_VARS.REQUEST().type], getGlobalVars)
}
