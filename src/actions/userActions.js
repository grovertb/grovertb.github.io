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

// import axios from 'axios'

// export const SHOW_USERS = 'SHOW_USERS'

// export function showUsers() {
    
//     return (dispatch, getState) => {
//         axios.get('http://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 dispatch( { type: SHOW_USERS, payload: response.data } ) 
//             }) 
//     }
    
// }