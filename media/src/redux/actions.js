import axios from 'axios'

export const GET_USERS = 'GET_USERS'
export const SET_ERR = 'SET_ERR'
export const ADD_USER = 'ADD_USER'



export const getTheUsers = () => dispatch => {
  axios
    .get('http://localhost:4994/api/users')
    .then(res => {
      dispatch({type: GET_USERS, payload: res.data})
    })
    .catch(err => {
      console.log('You have found the error', err)
      dispatch({type: SET_ERR, payload: 'Error Retrieving Users'})
  })
}

export const addUser = (addedUser) => dispatch => {
  axios
			.post('http://localhost:4994/api/users', addedUser)
			.then(res => {
				dispatch({ type: ADD_USER, payload: res.data })
			})
			.catch(err => {
				console.log('You have found the error', err)
				dispatch({ type: SET_ERR, payload: 'You Were Not Added Try Again' })
			})
}