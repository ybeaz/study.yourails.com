import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  getChunkedString,
  GetChunkedStringParamsType,
  GetChunkedStringOptionsType,
} from '../../Shared/getChunkedString'
import {
  getPreparedResponseFromBot,
  GetPreparedResponseFromBotParamsType,
} from '../../Shared/getPreparedResponseFromBot'

export function* getCourseS30SummaryChunkCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const { textChunk } = params

  try {
    /* Add summary to courseCreateProgress 
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
    */

    const variables = {
      createBotResponseInput: {
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        userText: textChunk,
      },
    }

    const createBotResponseSummary: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createBotResponse',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 30 * 1000,
      }
    )

    const summary = createBotResponseSummary.textObj.contentArray.map(
      (contentPiece: string) => getPreparedResponseFromBot(contentPiece)
    )

    return summary
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseS30SummaryChunkCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS30SummaryChunkCreated = withDebounce(
  getCourseS30SummaryChunkCreatedGenerator,
  500
)

export default function* getCourseS30SummaryChunkCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CHUNK_CREATED.REQUEST().type],
    getCourseS30SummaryChunkCreated
  )
}
