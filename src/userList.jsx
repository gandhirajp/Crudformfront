import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function UserList() {
    const [userList, setUserList] = useState([])
    useEffect(async () => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            //  let userData = await axios.get("https://mern-model.herokuapp.com/users")
            let userData = await axios.get("http://localhost:3001/users")
            setUserList(userData.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("are you sure Do you want to Delete! ")
            if (result) {
                await axios.delete(`http://localhost:3001/user/${id}`)

                fetchUsers()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='row '>
                <div className='col-lg-6 mt-4 d-flex justify-content-between mx-auto'>

                    <h3>UserList</h3>

                    <Link to="/create">
                        <button className='btn btn-primary'>Create User</button>
                    </Link>
                    
                </div>

            </div>
            <div className="row">
                <div className="col-6 mx-auto">
                    <table className="table mt-5">
                        <thead className="table-dark">
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((user,index) => {
                                    return <tr>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/edit-user/${user._id}`}>
                                                <button className='btn-sm btn-primary'>Edit</button>
                                            </Link>
                                        </td>
                                        <td>

                                            <button onClick={() => handleDelete(user._id)} className='btn-sm btn-danger'>Delete</button>
                                        </td>

                                    </tr>
                                })
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default UserList
