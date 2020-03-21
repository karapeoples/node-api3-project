import axios from 'axios'
const server = 'https://me-journal.herokuapp.com/api'

export const GET_USERS = 'GET_USERS'
export const SET_ERR = 'SET_ERR'
export const ADD_USER = 'ADD_USER'




export const getTheUsers = () => dispatch => {
  axios
    .get(`${server}/users`)
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
			.post(`${server}/users`, addedUser)
			.then(res => {
				dispatch({ type: ADD_USER, payload: res.data })
			})
			.catch(err => {
				console.log('You have found the error', err)
				dispatch({ type: SET_ERR, payload: 'You Were Not Added Try Again' })
			})
}

