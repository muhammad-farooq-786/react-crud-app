import React, { useState } from 'react'



const User = ({ user }) => {

  const [showForm,setShow] = useState(false)

  const showform =() => {
      setShow(!showForm)
  }
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope='col'>Edit/Delete</th>
          </tr>
      </thead>
        <tbody>
            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td><button className='btn btn-secondary' onClick={showform}>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User
