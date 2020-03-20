import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import EditForm from '../extras/EditForm'
import {useDispatch } from 'react-redux'
import { getTheUsers } from '../../redux/actions'
import { Button } from 'reactstrap'

const UserCard = ({ name, id }) => {
const server = 'http://localhost:4994/api'
const [turn, setTurn] = useState(false)
const [editItem, setEditItem] = useState({})
const [info, setInfo] = useState([])
const history = useHistory()
const dispatch = useDispatch()

  	const handleClick = () => {
				setTurn(true)
				axios
					.get(`${server}/users/${id}`)
					.then(res => {
						console.log(res)
						setEditItem(res.data)
					})
					.catch(err => console.log('Get By Id Error', err))
			}

			const handleDelete = e => {
				e.preventDefault()
				axios
					.delete(`${server}/users/${id}`)
					.then(res => {
						console.log(res)
						dispatch(getTheUsers())
						history.push('/users')
					})
					.then(res => {
						setInfo(res.data)
					})

					.catch(err => console.log('There is an error', err))
			}
  
	return (
		<section className='card-container'>
			{turn === true ? (
				<div>
					<EditForm editItem={editItem} setEditItem={setEditItem} setTurn={setTurn} />
				</div>
			) : (
				<div>
				<div style={{padding: '1%'}}>
						<span style={{ margin: '1%' }}>
						<Button size='sm' color='warning' onClick={handleClick}>
								Edit
							</Button>
						</span>

						<span style={{ margin: '1%' }}>
							<Button size='sm' color='danger' onClick={handleDelete}>
								X
							</Button>
						</span>
						</div>
					<Link to={`/user-journal/${id}`}>
						<div>
							<h1 className='links'>{name}</h1>
						</div>
					</Link>
				</div>
			)}
		</section>
	)
}
export default UserCard