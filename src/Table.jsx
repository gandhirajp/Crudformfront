import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {

    const[value,setValue]=useState([])

    useEffect(() => {
        async function fetchData() {

            try {
                let userData = await axios.get("http://localhost:3001/users")
                setValue(userData.data)
            } catch (error) {
                console.log(error)
            } 

           
        }
        fetchData()
        
    }, [])
    

   


    return (
        <div className='row'>
            <div className="col-lg-7 d-flex justify-content-between mx-auto">
                <p>User list</p>
                <Link to="/userlist">
                    <button className='btn btn-primary'>Create user</button>
                </Link>
            </div>
            <div className="col-lg-6  d-flex justify-content-between mx-auto mt-4">
                <table className='table'>
                    <thead >
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         value.map((index,all)=>{
                            return <tr>
                                <td>{index+1}</td>
                                <td>{all.name}</td>
                            </tr>
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
