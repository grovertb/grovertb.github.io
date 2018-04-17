import { GET_USERS } from '../constants/ActionTypes'

export function getUsers() {
  return (dispatch) => {
    const users = [
      {
        id:1, name: 'grover',
      },
      {
        id:2, name: 'daniel',
      },
      {
      id:3, name: 'arelis',
      }
    ]

    dispatch(
      {
        type: GET_USERS,
        data: users
      }
    )
  }
}
  

