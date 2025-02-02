import { store } from '../DataLayer/store'
import { actionAsync } from '../DataLayer/index.action'

import * as flags from '../FeatureFlags/index'
import { cookie } from 'yourails_common'
import { getMediaSizeCrossBrowser } from 'yourails_common'
import { COOKIE_ANALYTICSID_NAME } from 'yourails_common'

const { dispatch } = store

export const getSavedAnanlyticsInitData: Function = () => {
  if (!flags.isGetingSavedAnanlyticsEvent()) return

  let analyticsID: string | undefined = cookie.get(COOKIE_ANALYTICSID_NAME)
  const { href, hostname, pathname, search } = location

  if (analyticsID && analyticsID !== 'null') {
    dispatch(actionAsync.SAVE_ANALYTICS.SUCCESS({ analyticsID }))
    cookie.set(COOKIE_ANALYTICSID_NAME, analyticsID, {
      domain: hostname,
      days: 1,
    })
  } else {
    const { width, height } = getMediaSizeCrossBrowser(global)
    const { referrer } = document

    const dataNext: any = {
      initData: {
        width,
        height,
        search,
        pathname,
        hostname,
        href,
        referrer,
      },
    }

    dispatch(actionAsync.SAVE_ANALYTICS.REQUEST(dataNext))
  }
}
