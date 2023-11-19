import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import {
  AWS_COGNITO_URL,
  AWS_COGNITO_CLIENT_ID,
} from '../../Constants/aws.const'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const CLICK_ON_SIGN_IN: ActionEventType = (event, data) => {
  const environment = getDetectedEnv()
  const redirect_url: CLIENTS_URI = CLIENTS_URI[environment]
  const linkSignIn = `${AWS_COGNITO_URL}/login?client_id=${AWS_COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${redirect_url}&&scope=email+openid+profile`

  console.info('CLICK_ON_SIGN_IN [20]', { linkSignIn })

  history.push(linkSignIn)
}
