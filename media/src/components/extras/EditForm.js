import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getTheUsers } from '../../redux/actions'



const EditForm = ({ editItem, setEditItem, setInfo, setTurn }) => {
  const server = 'https://me-journal.herokuapp.com/api'
  const dispatch = useDispatch()

	const handleChange = e => {
		setEditItem({ ...editItem, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.put(`${server}/users/${editItem.id}`, editItem)
			.then(res => {
				console.log(res)
				setEditItem(editItem)
				setTurn(false)
        dispatch(getTheUsers())
        
			})
			.then(res => {
				setInfo(res.data)
			})
			.catch(err => console.log('There is an error', err))
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='name' value={editItem.name} onChange={handleChange} />
			<button>Update</button>
		</form>
	)
}

export default EditForm
