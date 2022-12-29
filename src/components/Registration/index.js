import React, { useState } from 'react'
import Header from "../Header"
import { Container, Row, Col, Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom' 


const Registration = () => {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
  
    const Registre = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(
            {
                "firstname": firstname,
                "lastname": lastname,
                "gender": gender,
                "confirmPassword": confirmPassword,
                "mobile": mobile,
                "dob": dob,
                "email": email,
                "password": password
            }
        );
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/UserRegistration", requestOptions)
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


            <Container className=" py-5 h-100">
                <Row className="row d-flex justify-content-center align-items-center h-100">
                    <Col className="col">
                        <Card >
                            <Row>
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample" className="img-fluid"
                                    />     
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Sign Up</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" for="form3Example1m">First name</label>
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg"
                                                        value={firstname} onChange={(e) => setFirstname(e.target.value)} />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" for="form3Example1n">Last name</label>
                                                    <input type="text" id="form3Example1n" className="form-control form-control-lg"
                                                        value={lastname} onChange={(e) => setLastname(e.target.value)} />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example9">Gender </label>
                                            <select id="form3Example9" className=" select form-control form-control-lg"
                                                value={gender} onChange={(e) => setGender(e.target.value)}>
                                                <option value="1">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>


                                        </div>
                                   
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example9">Mobile No</label>
                                            <input type="number" id="form3Example9" className="form-control form-control-lg"
                                                value={mobile} onChange={(e) => setMobile(e.target.value)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example9">DOB</label>
                                            <input type="date" id="form3Example9" className="form-control form-control-lg"
                                                value={dob} onChange={(e) => setDOB(e.target.value)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example97">Email ID</label>
                                            <input type="email" id="form3Example97" className="form-control form-control-lg" requried="true"
                                                value={email} onChange={(e) => setEmail(e.target.value)} />

                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example90">Password</label>
                                            <input type="text" id="form3Example90" class="form-control form-control-lg"
                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                            
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example90">Confirm Password</label>
                                            <input type="text" id="form3Example90" class="form-control form-control-lg"
                                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                           
                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-light btn-lg">Reset all</button>
                                            <button type="button" className="btn btn-warning btn-lg ms-2" onClick={Registre}>Submit form</button>
                                        </div>

                                    </div>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Registration;