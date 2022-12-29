
import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from 'react';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
 
    return (
        <>
            <Header />
            <Container>
                <br />
                <h3 class="mb-4">Contact Us</h3>
                <Row>
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name" />
                                    <Form.Control.Feedback type="invalid">invalid Name!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email" />
                                    <Form.Control.Feedback type="invalid">invalid Email!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" required />
                                    <Form.Control.Feedback type="invalid">
                                        invalid Subject !
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="ControlTextarea1">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide Comment.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14936.23110150469!2d77.3690771692236!3d28.622693782578622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1656653679484!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" title="unique" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </Col>
                </Row>
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text"><p> Sector 62, Noida Utter pardesh 201301</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                            </div>
                            <div class="text"> <p> <a href="tel://9662 313 577">+ 91 9662 313 577</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                            </div>
                            <div class="text"> <p> <a href="mailto:info@yoursite.com">Rajeev@pizzaKart.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="dbox w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                            </div>
                            <div class="text"><p> <Link to="#">pizzaKart.com</Link></p></div>
                        </div>
                    </div>
                </div>
                <br />
            </Container>
            <Footer />
        </>
    )
}
export default ContactUs