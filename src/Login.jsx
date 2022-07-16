import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                //  let loginData = await axios.post(" https://mern-model.herokuapp.com/login", values)
                let loginData = await axios.post("http://localhost:3001/login", values)

                window.localStorage.setItem("my_token", loginData.data.token)

                navigate("/userlist")

            } catch (error) {
                console.log(error)
            }
        }
    });
    return (
        <>
            <div className='container'>


                <div className='row'>

                    <div>
                        
                        <form onSubmit={formik.handleSubmit} >

                            <div className='col-lg-3'>
                                <h4> <label>Email</label></h4>
                                <input type="email" className="form-control" name='email' placeholder='Enter your email' required
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <h4> <label>Password</label></h4>
                                <input type="password" className="form-control" name='password' placeholder='Enter your password' required
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            <div className='login'>
                                <button type="submit" className='btn btn-primary mt-3 col-lg-3' >Login</button>
                            </div>
                            <div className='signup'>
                                <Link to="/register">
                                    <button type="submit" className='btn btn-primary mt-3 col-lg-3' >SignUp</button>
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login
