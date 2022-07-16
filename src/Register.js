import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post("http://localhost:3001/register", values)
                navigate("/")

            } catch (error) {
                console.log(error)
            }
        }
    });
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='col-lg-4'>
                            <label>Name</label>
                            <input type="text" className="form-control" name='name' placeholder='Enter your name' required
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            />
                        </div>
                        <div className='col-lg-4'>
                            <label>Email</label>
                            <input type="email" className="form-control" name='email' placeholder='Enter your email' required
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            />
                        </div>
                        <div className='col-lg-4'>
                            <label>Password</label>
                            <input type="password" className="form-control" name='password' placeholder='Enter your password' required 
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                        </div>
                        <div className='submit'>
                            {/* <Link to="/"> */}
                            <button type="submit" className='btn btn-primary mt-3 ' >Submit</button>
                            {/* </Link> */}
                        </div>
                       
  
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register
