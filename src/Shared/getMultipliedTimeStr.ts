import { getMsToTime } from './getMsToTime'

interface GetMultipliedTimeStrInterface {
  (str: string, multiplier: number): { duration: string; units: string }
}

/**
 * @description Function to multiply time and convert it back to string
 * @param str
 * @param multiplier
 * @returns
 */
export const getMultipliedTimeStr: GetMultipliedTimeStrInterface = (
  str,
  multiplier
) => {
  const timeArr = str.split(':').map(item => {
    return parseInt(item, 10)
  })
  let duration = ''
  let time = 0

  if (timeArr.length === 1) {
    time = timeArr[0] * multiplier
    duration = getMsToTime(time * 1000)
  } else if (timeArr.length === 2) {
    const minutes = timeArr[0]
    const seconds = timeArr[1]
    time = (minutes * 60 + seconds) * multiplier
    duration = getMsToTime(time * 1000)
  } else if (timeArr.length === 3) {
    const seconds = timeArr[0]
    const minutes = timeArr[1]
    const hours = timeArr[2]
    time = (hours * 60 * 60 + minutes * 60 + seconds) * multiplier
    duration = getMsToTime(time * 1000)
  }

  const units = time < 60 ? 'sec' : time < 60 * 60 ? 'min' : 'hour'
  return { duration, units }
}
