import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions'
import { useHistory } from 'react-router-dom'

const AddForm = () => {
	const dispatch = useDispatch()
	const [info, setInfo] = useState({ name: '' })
	const history = useHistory()

	const onSubmit = () => {
		dispatch(addUser(info))
		history.push('/users')
	}

	const onChange = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<form onSubmit={onSubmit}>
			<input name='name' value={info.name} placeholder='Input your Name' onChange={onChange} />
			<button>Join</button>
		</form>
	)
}

export default AddForm
