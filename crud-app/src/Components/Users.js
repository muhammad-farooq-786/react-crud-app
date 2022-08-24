import React, { useState } from 'react'
import User from './User';

const Users = () => {
  const[users,setUsers] = useState([
    {
      id : 1,
      name : 'farooq',
      location: 'lahore'
    },
    {
      id : 2,
      name : 'hasnain',
      location: 'lahore'
    },
    {
      id : 3,
      name : 'ibrahim',
      location: 'lahore'
    }
  ])

  return (
    <div>
      {users.map((user)=>(
        <User key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default Users
