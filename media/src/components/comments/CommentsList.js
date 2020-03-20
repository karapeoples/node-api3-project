import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentAdd from '../extras/CommentAdd'
import {Row, Col} from 'reactstrap'

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
			<div>
				<CommentAdd comments={comments} setComments={setComments}/>
			</div>
			<Row>
			{comments.map((comment, index) => {
				return (
					<Col lg = '4'>
					<div key={index}>
						<CommentCard text={comment.text} postId={comment.id} comments={comments} setComments={setComments}/>
						</div>
					</Col>
				)
			})}
			</Row>
		</div>
	)
}

export default CommentsList
