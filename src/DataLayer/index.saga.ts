import { all, fork } from 'redux-saga/effects'

import deactivateModulesSaga from './sagas/deactivateModulesSaga'
import getModulesSaga from './sagas/getModulesSaga'
import getModule60ModuleCreatedSaga from './sagas/getModule60ModuleCreatedSaga'
import getModule55ObjectionsCreatedSaga from './sagas/getModule55ObjectionsCreatedSaga'
import getModule45QuestionsCreatedSaga from './sagas/getModule45QuestionsCreatedSaga'
import getModule35SummaryCreatedSaga from './sagas/getModule35SummaryCreatedSaga'
import getModule20TranscriptCreatedSaga from './sagas/getModule20TranscriptCreatedSaga'
import getModule10MataDataCreatedSaga from './sagas/getModule10MataDataCreatedSaga'
import getBotResponseSaga from './sagas/getBotResponseSaga'
import getModuleCreatedSaga from './sagas/getModuleCreatedSaga'
import readArticleSaga from './sagas/readArticleSaga'
import deactivateCoursesSaga from './sagas/deactivateCoursesSaga'
import deactivateDocumentsSaga from './sagas/deactivateDocumentsSaga'
import getDocumentsSaga from './sagas/getDocumentsSaga'
import getAuthDataSaga from './sagas/getAuthDataSaga'
import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getModuleDataSaga from './sagas/getModuleDataSaga'
import sendEmailDocumentSaga from './sagas/sendEmailDocumentSaga'
import readDocumentSaga from './sagas/readDocumentSaga'
import createDocumentSaga from './sagas/createDocumentSaga'
import getCoursesSaga from './sagas/getCoursesSaga'
import getMatrixDataSaga from './sagas/getMatrixDataSaga'

export default function* indexSaga() {
  yield all([
    fork(getBotResponseSaga),
    fork(getModule60ModuleCreatedSaga),
    fork(getModule55ObjectionsCreatedSaga),
    fork(getModule45QuestionsCreatedSaga),
    fork(getModule35SummaryCreatedSaga),
    fork(getModule20TranscriptCreatedSaga),
    fork(getModule10MataDataCreatedSaga),
    fork(getModuleCreatedSaga),
    fork(deactivateModulesSaga),
    fork(getModulesSaga),
    fork(readArticleSaga),
    fork(deactivateCoursesSaga),
    fork(deactivateDocumentsSaga),
    fork(getDocumentsSaga),
    fork(getAuthDataSaga),
    fork(getAuthAwsCognitoUserRevokedSaga),
    fork(getAuthAwsCognitoUserRefreshedSaga),
    fork(getAuthAwsCognitoUserDataSaga),
    fork(getModuleDataSaga),
    fork(sendEmailDocumentSaga),
    fork(readDocumentSaga),
    fork(createDocumentSaga),
    fork(getCoursesSaga),
    fork(getMatrixDataSaga),
  ])
}
