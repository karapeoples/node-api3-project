import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTheUsers } from '../../redux/actions'
import UserCard from './UserCard'

const UsersList = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTheUsers())
  }, [dispatch])
  

  return (
  <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <UserCard name={user.name} />
          </div>
        )
    
      })}
    </div>
  )
}

export default UsersList