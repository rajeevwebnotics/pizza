import Slider from "../Slider"
import Product from "../Product"
import Header from "../Header";
import Footer from "../Footer";
import React from 'react';
import { Modal, Row } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [show, setShow] = useState(false); // trigger
    const offer = JSON.parse(localStorage.getItem("offer"))
    useEffect(() => {
        setTimeout(() => {
            if (offer === true) {
                setShow(false)
            }
            else {
                setShow(true)
                localStorage.setItem("offer", true)
            }
        }, 2000)
    }, [])
    return (
        <>
            <Header />
            <Slider />
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        PizzaKart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="text-center justify-content-center">
                        <div class="modal-body text-center">
                            <h1>Full screen Transparent Bootstrap Modal</h1>
                            <p>FEEL FRREE TO GET YOUR MODAL CODE HERE FOLKS.</p>
                            <Link class="pre-order-btn" to="#">GET THE MODAL CODE</Link>
                        </div>
                    </Row>
                </Modal.Body>
            </Modal>
            <br />
            <div class="container margin_60" id="How-it-works">
                <div class="main_title">
                    <h2 class="nomargin_top">How it works</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <br />
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="box_home" id="one" >
                            <span>1</span>
                            <h5>Search by address</h5>
                            <p>Find all restaurants available in your zone.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="box_home" id="two">
                            <span>2</span>
                            <h5>Choose a restaurant</h5>
                            <p>We have more than 1000s of menus online.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="box_home" id="three">
                            <span>3</span>
                            <h5>Pay by card or cash</h5>
                            <p>It's quick, easy and totally secure.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="box_home" id="four">
                            <span>4</span>
                            <h5>Delivery - Takeaway</h5>
                            <p>You are lazy? Are you backing home?</p>
                        </div>
                    </div>
                </div>
                <div id="delivery_time" class="d-none d-sm-block" >
                    <strong><span>3</span><span>0</span></strong>
                    <h4>The minutes that usually takes to deliver!</h4>
                </div>
            </div>
            <Product />
            <br />
            <div id="offer" class="stretch-full-width section-products-sale-event" >
                <div class="sale-event-content">
                    <h3 class="pre-title"><span>FREE DELIVERY WITH</span></h3>
                    <h2 class="section-title">PIZZA OF THE DAY</h2>
                </div>
            </div>
            <div class="high_light" >
                <div class="container">
                    <h3>Choose from over 2,000 Restaurants</h3>
                    <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
                    <a href="list_page.html">View all Restaurants</a>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home