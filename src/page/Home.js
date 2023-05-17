import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const users = useSelector (( state) => state.users)
    console.log(users)
  return (
    <div className='container mt-5'>
      <h2 className='text-center text-secondary my-5'>CRUD App using Redux Toolkit</h2>
      <Link to='/create' className='btn btn-success my-3'>Create +</Link>
      <table className='table'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>jomiloju</td>
                <td>idowuoluwajomiloju@gmail.com</td>
                <td>
                
                    <button className='btn btn-primary me-2'>edit</button>
                    <button className='btn btn-danger'>delete</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home