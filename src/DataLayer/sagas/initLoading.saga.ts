import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getConvertedType } from '../../Shared/getConvertedType'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'

function* initLoading(args: any) {
  try {
    const languageStorage = getConvertedType(localStorage.getItem('language'))
    const { language, authAwsCognitoUserData } = yield select(store => store)

    if (languageStorage) {
      yield put(actionSync.SELECT_LANGUAGE_APP(languageStorage))
    } else {
      getSetObjToLocalStorage({ source: 'initLoading [18]', language })
    }

    const code = args?.data?.query?.code

    console.info('initLoading.saga [23]', {
      refresh_token: localStorage.getItem('refresh_token'),
    })

    const refresh_token = getConvertedType(
      localStorage.getItem('refresh_token')
    )
    console.info('initLoading.saga [26]', { refresh_token })

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
    } else if (refresh_token) {
      console.info('initLoading.saga [30]', { refresh_token })
      yield call(getAuthAwsCognitoUserRefreshed, { data: { refresh_token } })
    }

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }
  } catch (error: any) {
    console.info('initLoading [31]', error.name + ': ' + error.message)
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING.REQUEST().type], initLoading)
}
