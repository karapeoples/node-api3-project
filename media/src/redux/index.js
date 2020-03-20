import { createStore, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { GET_USERS, SET_ERR, ADD_USER} from './actions'

const initialState = {
  users: [],
  error:''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
			case GET_USERS:
				return {
					...state,
					users: action.payload,
				}
			case ADD_USER:
				return {
					...state,
					users: [...state.users, action.payload],
				}
			case SET_ERR:
				return {
					...state,
					error: action.payload,
				}
			default:
				return state
		} 
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()));
export default store;