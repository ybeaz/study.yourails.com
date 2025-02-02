import { takeEvery, put } from 'redux-saga/effects'

import { QueryReadDocumentsArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* readDocumentGenerator(params: ActionReduxType | any): Iterable<any> {
  const { data: documentID } = params

  const variables: QueryReadDocumentsArgs = {
    readDocumentsIdsInput: [documentID],
  }

  const readDocuments: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['readDocuments'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 5000,
    }
  )

  yield put(actionSync.SET_DOCUMENTS(readDocuments))
}

const readDocument = withLoaderWrapperSaga(
  withTryCatchFinallySaga(readDocumentGenerator, {
    optionsDefault: { funcParent: 'readDocumentSaga' },
    resDefault: [],
  })
)

export default function* readDocumentSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], readDocument)
}
