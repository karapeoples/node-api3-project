import React, { useState} from 'react'
import axios from 'axios'
import CommentEdit from '../extras/CommentEdit'
import { useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

const CommentCard = ({ text, postId, setComments, comments }) => {
	const server = 'http://localhost:4994/api'
	const [turn, setTurn] = useState(false)
	const [editItem, setEditItem] = useState({})
	const { id } = useParams()
	



	const handleClick = () => {
		setTurn(true)
		axios
			.get(`${server}/posts/${postId}`)
			.then(res => {
				console.log(res)
				setEditItem(res.data)
			})
			.catch(err => console.log('Get By Id Error', err))
	}

	const handleDelete = e => {
		e.preventDefault()
		axios
			.delete(`${server}/posts/${postId}`)
			.then(res => {
				console.log(res)
				return axios.get(`${server}/users/${id}/posts`)
			})
			.then(res => {
				setComments(res.data)
			})
				
			.catch(err => console.log('There is an error', err))
	}

	return (
		<section className='card-container'>
			{turn === true ? (
				<div>
					<CommentEdit
						editItem={editItem}
						setEditItem={setEditItem}
						setTurn={setTurn}
						comments={comments}
						setComments={setComments}
					/>
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

					<div className='comments'>
						<h1>{text}</h1>
					</div>
				</div>
			)}
		</section>
	)
}
export default CommentCard
