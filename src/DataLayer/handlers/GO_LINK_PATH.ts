import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getRedirected } from '../../Shared/'

export const GO_LINK_PATH: ActionEventType = (
  event,
  { navigate, pathname }: Record<'navigate' | 'pathname', any> = {
    navigate: () => {},
    pathname: '',
  }
) => {
  try {
    navigate(pathname)
    setTimeout(() => {
      if (location.pathname !== pathname) getRedirected(pathname, { isOrigin: true })
    }, 500)
  } catch (error) {
    console.error('GO_LINK_PATH [13]', error)
  }
}
