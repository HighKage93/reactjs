import actions from "./actions"

const initialState = {}

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
        console.log(state, action.type)
      return { ...state, ...action.payload }
    default:
      return state
  }
}