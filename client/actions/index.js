
import { getQuiz } from '../apis/question'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export function setQuiz (quizData) {
  return {
    type: SET_QUESTIONS,
    quizData
  }
}

export function fetchQuiz () {

  return dispatch => {
    return getQuiz()
      .then(quizData => {
        dispatch(setQuiz(quizData))
        return null
      })
    }
}
