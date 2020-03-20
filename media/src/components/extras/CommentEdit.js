import React, {useState} from 'react'
import axios from 'axios'
import {useParams, useHistory}from 'react-router-dom'


const CommentEdit = ({ editItem, setEditItem, setComments, comments, setTurn }) => {
	const server = 'http://localhost:4994/api'
	const { id } = useParams()
	const history = useHistory()

let reloadRoute = () => {
	history.push({ pathname: '/empty' })
	history.replace({ pathname: `/user-journal/${id}` })
}

	const handleChange = e => {
		setEditItem({ ...editItem, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.put(`${server}/posts/${editItem.id}`, editItem)
			.then(res => {
				console.log(res)
				setEditItem(editItem)
				setTurn(false)
				reloadRoute()
			})
			.then(res => {
				
			})
			.catch(err => console.log('There is an error', err))
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='text' value={editItem.text} onChange={handleChange} />
			<button>Update</button>
		</form>
	)
}

export default CommentEdit
