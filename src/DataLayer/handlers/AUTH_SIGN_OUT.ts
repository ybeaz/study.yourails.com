import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const AUTH_SIGN_OUT: ActionEventType = (event, data) => {
  const data2 = [
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))

  window.FB.logout(function (response) {
    // console.info('handleEvents [248]', 'FB logout', { response })
  })

  dispatch(
    actionSync.SET_USER_PROFILE({
      calledFrom: 'AUTH_SIGN_OUT',
    })
  )
}
