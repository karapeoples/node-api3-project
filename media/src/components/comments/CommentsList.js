import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CommentsList = () => {
	const [comments, setComments] = useState([])
	const { id } = useParams()
	const server = 'http://localhost:4994/api'

	useEffect(() => {
		axios
			.get(`${server}/users/${id}/posts`)
			.then(res => {
				setComments(res.data)
			})
			.catch(err => {
				console.log('You have found the error', err)
			})
	}, [])

	return (
		<div>
			{comments.map((comment, index) => {
				return (
					<div key={index}>
						<CommentCard text={comment.text} postId={comment.id} comments={comments} setComments={setComments}/>
					</div>
				)
			})}
		</div>
	)
}

export default CommentsList
