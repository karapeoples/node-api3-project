import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, getTheUsers } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import {Button, Input, Form} from 'reactstrap'

const AddForm = () => {
	const dispatch = useDispatch()
	const [info, setInfo] = useState({ name: '' })
	const history = useHistory()
	
	

	const onSubmit = e => {
		e.preventDefault()
		dispatch(addUser(info))
		setTimeout(()=>{
		dispatch(getTheUsers())
			history.push('/users')
		}, 1500)
	}

	const onChange = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<Form onSubmit={onSubmit}>
			<Input style={{width: '50%', margin: '1% auto'}} name='name' value={info.name} placeholder='Input your Name' onChange={onChange} />
			<Button color='warning' size ='sm'>Join</Button>
		</Form>
	)
}

export default AddForm
