import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const addDocumentConnector: Function = (
  vars: any,
  fragmentName: string
): any => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'AddDocument',
      variables: {
        addDocumentInputGraphql: { ...vars, env },
      },
      query: `mutation AddDocument($addDocumentInputGraphql: AddDocumentInputGraphql!){ addDocument(addDocumentInputGraphql: $addDocumentInputGraphql){ ...${fragmentName} }} fragment ${FRAGMENTS_STRINGS[fragmentName]}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
