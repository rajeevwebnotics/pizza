import React, { useState } from 'react'
import Header from "../Header"
import { Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const Login = () => {
        localStorage.clear()
   
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(
            {
                "email": email,
                "password": password,
            }
        );
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:3000/UserLogin", requestOptions)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('User', JSON.stringify(result));
                if (result.message === 'Login Successfully.') {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        navigate('/')
                    }, 2000);
                }
                else {
                    return <p>Username or password is incorrect!</p>
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            {
                Loading ? (
                    <div className="loader text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : null
            }
            <Header />
            <section class="h-100 ">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card  my-4">
                                <div class="row g-0">
                                    <div class="col-xl-6 d-none d-xl-block">
                                        <img src="https://theambrosia.com/wp-content/uploads/2021/11/Hot-Pizza.jpg"
                                            alt="Sample" class="img-fluid" />
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card-body p-md-5 text-black">
                                            <h3 class=" text-uppercase">Sign in</h3>
                                            <div class="form-outline ">
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Email ID</Form.Label>
                                                    <Form.Control type="email" className="form-control form-control-lg" placeholder="Email"
                                                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                </Form.Group>
                                            </div>
                                            <div class="form-outline ">
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="Password" className="form-control form-control-lg" placeholder="Password"
                                                        value={password} onChange={(e) => setpassword(e.target.value)} required />
                                                </Form.Group>
                                            </div>
                                            <div class="d-flex justify-content-end pt-3">
                                                {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                                                <button type="submit" class="btn btn-light btn-lg" onClick={Login}>Login</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;