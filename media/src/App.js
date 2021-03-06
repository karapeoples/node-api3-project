import React from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import Welcome from './components/extras/Welcome'
import UsersList from './components/users/UsersList'
import AddForm from './components/extras/AddForm'
import CommentsList from './components/comments/CommentsList'

function App() {
	return (
		<div className='App'>
			<nav className='App-header'>
				<Link to='/' className='links'>
					Home
				</Link>
				<Link to='/create' className='links'>
					Become a User
				</Link>
				<Link to='/users' className='links'>
					Users
				</Link>
			</nav>
			<div>
				<Route path='/create' component={AddForm} />
				<Route path='/users' component={UsersList} />
				<Route exact path='/' component={Welcome} />
				<Route path='/user-journal/:id' component={CommentsList} />
			</div>
		</div>
	)
}

export default App
