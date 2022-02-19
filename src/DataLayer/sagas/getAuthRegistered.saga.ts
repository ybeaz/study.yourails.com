import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { IRootStore } from '../../Interfaces/IRootStore'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthRegisteredConnector } from '../../CommunicationLayer/getAuthRegistered.connector'

function* getAuthRegistered() {
  const {
    forms: {
      user: { userEmail, userName, passwordAuth },
    },
  } = yield select((store: IRootStore) => store)

  const { method, url, payload, options } = getAuthRegisteredConnector(
    userName,
    userEmail,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { register },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_USER_PROFILE({
        ...register,
        userStatus: register.status,
        loginSource: 'un.userto.com',
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthRegisteredWatcher() {
  yield takeEvery(
    [actionAsync.GET_AUTH_SIGN_UP.REQUEST().type],
    getAuthRegistered
  )
}
