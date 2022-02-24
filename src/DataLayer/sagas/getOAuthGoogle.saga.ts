import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOAuthGoogleConnector } from '../../CommunicationLayer/getOAuthGoogle.connector'

function* getOAuthGoogle(args: any) {
  const {
    data: { clientId, credential, select_by },
  } = args

  const { method, url, payload, options } = getOAuthGoogleConnector(
    clientId,
    credential,
    select_by
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { oAuthGoogle },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_USER_PROFILE({
        ...oAuthGoogle,
        userId: oAuthGoogle.uid,
        userIdExternal: '',
        userWebTokenAuth: oAuthGoogle.webToken,
        userStatus: oAuthGoogle.status,
        userLoginSource: 'google.com',
      })
    )

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInWithGoogle', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getOAuthGoogleSaga() {
  yield takeEvery([actionAsync.GET_OAUTH_GOOGLE.REQUEST().type], getOAuthGoogle)
}
