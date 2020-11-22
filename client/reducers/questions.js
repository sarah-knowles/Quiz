import { SET_QUESTIONS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.quizData
    default:
      return state
  }
}

export default reducer
