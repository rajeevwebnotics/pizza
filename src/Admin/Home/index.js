import Header from "../Header/index.js"
import { Row, Col, Card, Container, Form, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom' 
const port = 'http://localhost:3000';

const Home = () => {
    const navigate = useNavigate()
    const [idfilter2, setidfilter2] = useState([]);
    const [idfilter, setidfilter] = useState([]);
    const [min, setmin] = useState();
    const [sec, setsec] = useState();
    const vendor = JSON.parse(localStorage.getItem('adminid'))
    if (vendor && vendor.message === 'Login Successfully.') {
        useEffect(() => {
            async function fetchProduct() {
                const response = await fetch('http://localhost:3000/listOrder');
                const json = await response.json();
                const vendor = JSON.parse(localStorage.getItem('adminid'))
                if (vendor === undefined) {
                    return null
                }
                else {
                    const vendor_id = vendor && vendor.data.map((i, key) => i._id)
                    setidfilter(json.filter((item) => item.vendor_id.toLowerCase().includes(vendor_id[0].toLowerCase())))
                    // setOrderlist(json)
                }
            }
            async function fetchProductdata() {
                const response = await fetch('http://localhost:3000/files');
                const json2 = await response.json();
                const vendor = JSON.parse(localStorage.getItem('adminid'))
                if (vendor === undefined) {
                    return null
                }
                else {
                    const vendor_id = vendor.data.map((i, key) => i._id)
                    setidfilter2(json2.filter((item) => item.vendor_id.toLowerCase().includes(vendor_id[0].toLowerCase())))
                }
            }
            fetchProduct();
            fetchProductdata();
        }, []);

        useEffect(() => {
            async function fetchtimer() {
                let min = (localStorage.getItem("min")) ? localStorage.getItem("min") : 29;
                let counter = (localStorage.getItem("sec")) ? localStorage.getItem("sec") : 59;
                setmin(min)
                setsec(counter)
                setInterval(function () {
                    localStorage.setItem("sec", counter);
                    setsec(counter)
                    counter--
                    if (min !== 0) {
                        if (counter === 0) {
                            localStorage.setItem("min", min - 1);
                            setmin(min - 1)
                            console.log("HAPPY NEW YEAR!!");
                            //clearInterval(newYearCountdown);
                            counter = 59;
                        }
                    }
                }, 1000);
            }
            fetchtimer()
        }, [])
    }
    else{
        swal("Please login to continue", {
            buttons: false,
            timer: 2000,
        });
        setTimeout(() => {
            navigate('/admin/login')

        }, 3000);
    }
        const handleChange = (event, items) => {
            var today = new Date(),
                curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify(
                {
                    "status": event.target.value,
                    "_id": items._id,
                    "time": curTime
                }
            );
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("http://localhost:3000/OrderStatusUpdate", requestOptions)
                .then(response => response.json())
                .then(result => {
                    localStorage.setItem('result', JSON.stringify(result));
                })
                .catch(error => console.log('error', error));
        }
  
    return (
        <>
            <Header />
            <br></br>
            <br></br>
            <Container>
                <Row >
                    <Col xs={1} md={3}>
                        <Card className="bg-color-product">
                            <Card.Body>
                                <Row >
                                    <Col xs={1} md={6}>
                                        <Card.Title> <i class="fa fa-list-alt" aria-hidden="true"></i></Card.Title>
                                    </Col>
                                    <Col xs={1} md={6}>
                                        <Card.Title className="text-end">{idfilter2.length} <br /><span className="title_pizza">Products</span></Card.Title>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={3}>
                        <Card className="bg-color-product">
                            <Card.Body>
                                <Row >
                                    <Col xs={1} md={6}>
                                        <Card.Title> <i class="fa fa-sort" aria-hidden="true"></i></Card.Title>
                                    </Col>
                                    <Col xs={1} md={6}>
                                        <Card.Title className="text-end">6 <br /> <span className="title_pizza">Order</span></Card.Title>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={3}>
                        <Card className="bg-color-product">
                            <Card.Body>
                                <Row >
                                    <Col xs={1} md={6}>
                                        <Card.Title> <i class="fa fa-truck" aria-hidden="true"></i></Card.Title>
                                    </Col>
                                    <Col xs={1} md={6}>
                                        <Card.Title className="text-end">6<br />  <span className="title_pizza">Delivery</span></Card.Title>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={3}>
                        <Card className="bg-color-product">
                            <Card.Body>
                                <Row >
                                    <Col xs={1} md={6}>
                                        <Card.Title> <i class="fa fa-times-circle-o" aria-hidden="true"></i></Card.Title>
                                    </Col>
                                    <Col xs={1} md={6}>
                                        <Card.Title className="text-end">6 <br /> <span className="title_pizza">Cancel</span></Card.Title>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    {
                        idfilter.map((items, i) => {
                            return (
                                <Card className="my-4 bg-color-product">
                                    <Card.Body>

                                        <Row>
                                            <Col md={3}>
                                                <h6>Parsonal info</h6>
                                                <ul>
                                                    <li><span>Name : {items.fname} {items.lname}</span></li>
                                                    <li><span>Phone : {items.mobile_no}</span></li>
                                                    <li><span>Email : {items.email}</span></li>
                                                </ul>
                                            </Col>
                                            <Col md={3}>
                                                <h6>Address </h6>
                                                <ul>
                                                    <li><span>Street: {items.street}</span></li>
                                                    <li><span>City: {items.city}</span></li>
                                                    <li><span>State:  {items.province} , {items.zip}</span></li>
                                                </ul>
                                            </Col>
                                            <Col md={2}>
                                                <h6>Total Amount </h6>
                                                <Card.Title>₹ {items.totalamount} </Card.Title>
                                                <h6><b>Place at : </b> {items.time}</h6>

                                            </Col>
                                            <Col md={2}>
                                                <h6>Status </h6>
                                                <Card.Title>
                                                    <Form.Select aria-label="Default select example" onChange={(e) => handleChange(e, items)} >
                                                        {items.status === "Process" ? (
                                                            <option value="Process" selected>Process</option>
                                                        ) : <option value="Process">Process</option>}


                                                        {items.status === "Confirmed" ? (
                                                            <option value="Confirmed" selected>Confirmed</option>
                                                        ) : <option value="Confirmed">Confirmed</option>}

                                                        {items.status === "Prepared" ? (
                                                            <option value="Prepared" selected>Prepared</option>
                                                        ) : <option value="Prepared">Prepared</option>}

                                                        {items.status === "Completed" ? (
                                                            <option value="Completed" selected>Completed</option>
                                                        ) : <option value="Completed">Completed</option>}
                                                    </Form.Select>
                                                </Card.Title>
                                            </Col>
                                            <Col md={2}>
                                                <p>Delivery time  Countdown</p>
                                                <span>{min}:{sec}</span>
                                            </Col>
                                        </Row>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                    <Table className="data" >
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>SoldPrice</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                items.cart.map((list, i) => {
                                                    return (
                                                        <tr >
                                                            <td>
                                                                <img src={`${port}/public/Assets/productImg/${list.nameImg1}`} width="100px" alt="img" />
                                                            </td>
                                                            <td> {list.Name}</td>
                                                            <td> {list.cartQuantity}</td>
                                                            <td> {list.SoldPrice}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Home