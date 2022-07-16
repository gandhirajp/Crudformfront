import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

function UserCreate() {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            age:''
        },
        onSubmit: async values => {
           try {
           await axios.post("http://localhost:3001/create-user",values) 
        //    await axios.post("https://mern-model.herokuapp.com/create-user",values) 
           navigate("/userlist")
           } catch (error) {
               console.log(error)
           }
        },
    });
    return (
        <div className='row'>
            <form onSubmit={formik.handleSubmit}>
                <div className='col-lg-4'>
                    <label>Name</label>
                    <input type="text" className="form-control" name='name' placeholder='Enter your name' required
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                </div>

                <div className='col-lg-4'>
                    <label>Age</label>
                    <input type="number" className="form-control" name='age' placeholder='Enter your age' required
                        onChange={formik.handleChange}
                        value={formik.values.age} />
                </div>
                <div className='col-lg-4'>
                    <label>Email</label>
                    <input type="email" className="form-control" name='email' placeholder='Enter your Email' required
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                </div>
                <button className='btn btn-primary mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default UserCreate
