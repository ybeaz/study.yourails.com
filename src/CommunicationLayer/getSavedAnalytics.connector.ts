import axios from 'axios'

import {
  ConnectorOutputType,
  AxiosRequestHeaders,
} from '../Interfaces/ConnectorOutputType'
import { AnalyticsInputType } from '../Interfaces/AnalyticsInputType'
import { SERVERS_ANALYTICS as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { getAssetHash } from '../Shared/getAssetHash'

interface IGetSavedAnalyticsConnector {
  (props: AnalyticsInputType): ConnectorOutputType
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getSavedAnalyticsConnector: IGetSavedAnalyticsConnector =
  props => {
    const hash256 = getAssetHash(props)
    const envType = getDetectedEnv()

    const obj: ConnectorOutputType = {
      testCapture: 'should return 200 code and data defined',
      axiosClient: axios.create({
        baseURL: `${SERVERS[envType]}/graphql`,
        timeout: 1000,
        headers,
      }),
      method: 'post',
      params: {
        operationName: 'SaveAnalytics',
        variables: {
          analyticsInput: {
            ...(props.analyticsID && { analyticsID: props.analyticsID }),
            hash256,
            ...(props.initData && { initData: props.initData }),
            ...(props.event && { event: props.event }),
          },
        },
        query:
          'mutation SaveAnalytics($analyticsInput: AnalyticsInput!){saveAnalytics(analyticsInput: $analyticsInput){ analyticsID, hash256, dateCreate, dateUpdate }}',
      },
    }

    return obj
  }
