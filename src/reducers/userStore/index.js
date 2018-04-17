import { GET_USERS } from '../../constants/ActionTypes'

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.data }
    default:
      return state
  }
}