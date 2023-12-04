import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'
import { getLocalStorageStoreStateRead } from '../../Shared/getLocalStorageStoreStateRead'
import { getRedirected } from '../../Shared/getRedirected'
import { isLoadingLocalStorageStoreState } from '../../FeatureFlags'
import { getCourses } from './getCourses.saga'

function* initLoading(args: any): Iterable<any> {
  try {
    const storeStateLocalStorage = getLocalStorageStoreStateRead()
    const languageLocalStorage = storeStateLocalStorage?.language

    if (storeStateLocalStorage) {
      if (isLoadingLocalStorageStoreState())
        yield put(actionSync.SET_STORE_STATE(storeStateLocalStorage))
      yield put(actionSync.SELECT_LANGUAGE_APP(languageLocalStorage))
    }
    yield put(actionSync.SET_IS_LOADED_LOCAL_STORAGE_STORE_STATE(true))

    const code = args?.data?.query?.code

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
      getRedirected('/')
    } else {
      yield call(getAuthAwsCognitoUserRefreshed)
    }

    yield put(
      actionSync.SET_SIDE_NAVIGATION_LEFT({
        isSideNavLeftVisible: false,
      })
    )

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }

    const {
      pagination: {
        courses: { first, offset },
      },
    } = args.data
    console.info('initLoading.saga [44]', { first, offset })

    yield getCourses({ first, offset })
  } catch (error: any) {
    console.info('initLoading [31]', error.name + ': ' + error.message)
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING.REQUEST().type], initLoading)
}
