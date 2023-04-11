import actions from "./actions"

const initialState = {
    user: null
  // loading: false,
  // aocsData: [],
}

export default function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}