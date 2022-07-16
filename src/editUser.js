import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

function EditUser() {
    let params = useParams();
    useEffect(async () => {
        let userData = await axios.get(`http://localhost:3001/user/${params.id}`)
        formik.setValues(userData.data)
    }, [])

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            age: ''
        }, 
        onSubmit: async (values) => {

            try {
                delete values._id;

                // delete values["_id"]

                await axios.put(`http://localhost:3001/user/${params.id}`, values)
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
                <button className='btn btn-primary mt-3' type="submit">Submit</button>
            </form>

        </div>
    )
}

export default EditUser
