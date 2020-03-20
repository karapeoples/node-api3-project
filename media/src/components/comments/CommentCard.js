import React, { useState} from 'react'
import axios from 'axios'
import CommentEdit from '../extras/CommentEdit'
import { useParams, useHistory } from 'react-router-dom'

const CommentCard = ({ text, postId, setComments, comments }) => {
	const server = 'http://localhost:4994/api'
	const [turn, setTurn] = useState(false)
	const [editItem, setEditItem] = useState({})
	const { id } = useParams()
	const history = useHistory()

	let reloadRoute = () => {
		history.push({ pathname: '/empty' })
		history.replace({ pathname: `/user-journal/${id}` })
	}

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
				reloadRoute()
			})
			.then(res => {})
				
			.catch(err => console.log('There is an error', err))
	}

	return (
		<section>
			{turn === true ? (
				<div>
					<CommentEdit editItem={editItem} setEditItem={setEditItem} setTurn={setTurn} comments={comments} setComments={setComments} />
				</div>
			) : (
				<div>
					<span>
						<span>
							<button onClick={handleClick}>Edit</button>
						</span>

						<span>
							<button onClick={handleDelete}>X</button>
						</span>
					</span>

					<div>
						<h1>{text}</h1>
					</div>
				</div>
			)}
		</section>
	)
}
export default CommentCard
