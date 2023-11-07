import { getLimitedArrayElemsRandomly } from './getLimitedArrayElemsRandomly'

interface GetCoursePassParamsSetInterface {
  (
    courses: any[],
    options: {
      courseIDIn: string
      indexIn: number
      questionNumberIn: number | undefined
      passRateIn: number | undefined
    }
  ): any[]
}

/**
 * @description Function to reduce course questions by number, pick up randomly
 */
export const getCoursePassParamsSet: GetCoursePassParamsSetInterface = (
  courses: any[],
  { courseIDIn, indexIn, questionNumberIn, passRateIn } = {
    courseIDIn: 'all',
    indexIn: 0,
    questionNumberIn: undefined,
    passRateIn: undefined,
  }
) => {
  return courses.map(course => {
    const { courseID, questionNumber, modules, passRate } = course
    let questionNumberNext =
      questionNumberIn && typeof questionNumberIn === 'number'
        ? questionNumberIn
        : questionNumber

    questionNumberNext = questionNumberNext > 1 ? questionNumberNext : 2

    let modulesNext = modules

    if (courseIDIn === undefined || courseIDIn === courseID) {
      modulesNext = modules.map(module => {
        const { index, questions } = module

        let questionsNext = questions
        if (
          (courseIDIn === undefined || indexIn === index) &&
          typeof questionNumberNext === 'number'
        ) {
          questionsNext = getLimitedArrayElemsRandomly(
            questions,
            questionNumberNext
          )
        }
        return { ...module, questions: questionsNext }
      })
    }

    const passRateNext = !!passRateIn ? passRateIn : passRate

    return { ...course, passRate: passRateNext, modules: modulesNext }
  })
}
