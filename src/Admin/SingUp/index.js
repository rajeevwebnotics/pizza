import React, { useState } from 'react'
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

import Header from "../Header"
import {useNavigate} from 'react-router-dom'
const SingUp = () => {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const Registre = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(
            {
                "firstname": firstname,
                "lastname": lastname,
                "gender": gender,
                "password": password,
                "mobile": mobile,
                "dob": dob,
                "email": email,
                "confirmpassword": confirmpassword
            }
        );
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:3000/AdminRegistration", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("result", result)
                localStorage.setItem('adminid', JSON.stringify(result));
                if (result._id) {

                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        navigate('./login') 
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
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample" class="img-fluid"
                                        />
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card-body p-md-5 text-black">
                                            <h3 class="mb-5 text-uppercase">Admin Singup</h3>
                                            <Form noValidate validated={validated} >
                                                <Row>
                                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                        <Form.Label>First name</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"

                                                            aria-describedby="inputGroupPrepend"
                                                            className="form-control form-control-lg"
                                                            value={firstname} onChange={(e) => setFirstname(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback type="invalid"> Enter First name </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                type="text"
                                                                aria-describedby="inputGroupPrepend"
                                                                className="form-control form-control-lg"
                                                                required
                                                                value={lastname} onChange={(e) => setLastname(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Enter Last Name
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                                        <Form.Label>Gender</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Select className="form-control form-control-lg" required aria-describedby="inputGroupPrepend"
                                                                value={gender} onChange={(e) => setGender(e.target.value)}>
                                                                <option value=''>Gender</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Other">Other</option>
                                                            </Form.Select>
                                                            <Form.Control.Feedback type="invalid">
                                                                Select gender
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                        <Form.Label>Mobile No</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            aria-describedby="inputGroupPrepend"
                                                            className="form-control form-control-lg"
                                                            value={mobile} onChange={(e) => setMobile(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback type="invalid"> Enter Mobile No </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                                        <Form.Label>Date of birth </Form.Label>
                                                        <InputGroup hasValidation>
                                                            <Form.Control
                                                                type="date"
                                                                aria-describedby="inputGroupPrepend"
                                                                className="form-control form-control-lg"
                                                                required
                                                                value={dob} onChange={(e) => setDOB(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Enter Date of birth
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="email"
                                                            aria-describedby="inputGroupPrepend"
                                                            className="form-control form-control-lg"
                                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback type="invalid"> Enter Email </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="password"
                                                            aria-describedby="inputGroupPrepend"
                                                            className="form-control form-control-lg"
                                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback type="invalid"> Enter Password </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            aria-describedby="inputGroupPrepend"
                                                            className="form-control form-control-lg"
                                                            value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback type="invalid"> Enter Confirm Password </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Row>
                                                <Form.Group className="mb-3">
                                                    <Form.Check
                                                        required
                                                        label="Agree to terms and conditions"
                                                        feedback="You must agree before submitting."
                                                        feedbackType="invalid"
                                                        class="form-control form-control-lg"
                                                    />
                                                </Form.Group>
                                                <Button onClick={Registre}>Submit form</Button>
                                            </Form>


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
export default SingUp;