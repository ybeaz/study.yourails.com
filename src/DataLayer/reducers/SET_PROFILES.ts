import { ProfileType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrBy } from 'yourails_common'

export const SET_PROFILES: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { profiles } = store

  const profilesNext = getUniqArrBy(['profileID'], [...data, ...profiles]).filter(
    (profile: ProfileType) => profile.isActive === true
  )
  const storeNext = { ...store, profiles: profilesNext }
  return storeNext
}
