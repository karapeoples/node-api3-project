import React from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import Welcome from './components/extras/Welcome'
import UsersList from './components/users/UsersList'
import AddForm from './components/extras/AddForm';

function App() {
  return (
			<div className='App'>
      <nav className='App-header'>
          <Link to='/'>Home</Link>
					<Link to='/create'>Become a User</Link>
					<Link to='/users'>Users</Link>
					
				</nav>
				<div>
					<Route path='/create' component={AddForm} />
					<Route path='/users' component={UsersList} />
					<Route exact path='/' component={Welcome} />
				</div>
			</div>
		)
}

export default App;
