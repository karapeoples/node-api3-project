import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTheUsers } from '../../redux/actions'
import UserCard from './UserCard'
import {Row, Col} from 'reactstrap'


const UsersList = () => {
	const users = useSelector(state => state.users)
	const dispatch = useDispatch()
	

	useEffect(() => {
		dispatch(getTheUsers())
	}, [dispatch])



	const UserDetails = ({ id, name }) => {
		return (
			
				
			<div>
				<UserCard name={name} id={id}/>
			</div>
				
						
		)
	}

	return (
		<div>
			<Row>
			{users.map((user, index) => {
				return (
					<Col lg ='4'>
					<div key={index}>
						<UserDetails id={user.id} name={user.name} />
						</div>
					</Col>
				)
			})}
			</Row>
		</div>
	)
}

export default UsersList
