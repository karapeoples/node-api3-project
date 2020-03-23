import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Button, Input, Form} from 'reactstrap'

const CommentAdd = ({comments, setComments}) => {
  const [addedPost, setAddedPost] = useState({text: '' })
  const server = 'https://me-journal.herokuapp.com/api'
  const {id} = useParams()

  const onSubmit = e => {
    e.preventDefault()
    setAddedPost({ ...addedPost})
    axios
					.post(`${server}/users/${id}/posts`, addedPost)
					.then(res => {
						setAddedPost(addedPost)
						return axios.get(`${server}/users/${id}/posts`)
					})
					.then(res => {
						setComments(res.data)
					})
					.catch(err => console.log('Your Entry Could Not Be Added', err))
	}

	const onChange = e => {
		setAddedPost({
			...addedPost,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<Form onSubmit={onSubmit}>
			<Input style={{width: '50%', margin: '1% auto'}} name='text' value={addedPost.text} placeholder='Add A Journal Entry' onChange={onChange} />
			<Button color='warning' size='sm'>Post</Button>
		</Form>
	)
}

export default CommentAdd
