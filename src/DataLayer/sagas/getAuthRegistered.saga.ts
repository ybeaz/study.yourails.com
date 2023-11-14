import { takeEvery, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthRegisteredConnector } from '../../CommunicationLayer/getAuthRegistered.connector'

function* getAuthRegistered() {
  const {
    forms: {
      user: {
        userEmail: userEmail2,
        userName: userName2,
        userPasswordAuth: userPasswordAuth2,
      },
    },
  } = yield select((store: RootStoreType) => store)

  const { axiosClient, method, params } = getAuthRegisteredConnector(
    userName2,
    userEmail2,
    userPasswordAuth2
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { register },
      },
    } = yield axiosClient[method]('', params)

    const {
      email: userEmail,
      message,
      path,
      phone: userPhone,
      roles: userRoles,
      status: userStatus,
      uid: userIdAuth,
      userName,
      webToken: userWebTokenAuth,
    } = register

    yield put(
      actionSync.SET_USER_PROFILE({
        userEmail,
        userIdAuth,
        userIdExternal: '',
        userLoginSource: 'un.userto.com',
        userName,
        userPhone,
        userRoles,
        userStatus,
        userWebTokenAuth,
      })
    )

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signUpManually', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthRegisteredSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_SIGN_UP.REQUEST().type],
    getAuthRegistered
  )
}
