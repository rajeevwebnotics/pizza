import Header from "../../Header"
import { Row, Col, Card, Container, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import {useNavigate} from 'react-router-dom' 


const Upload = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [SoldPrice, setSoldPrice] = useState('');
    const [Category, setCategory] = useState('');
    const [SubCategory, setSubCategory] = useState('');
    const [Size, setSize] = useState('');
    const [Description, setDescription] = useState('');
    const [ProductImg1, setProductImg1] = useState();
    const [Loading, setLoading] = useState(false);
    const [ProductImg2, setProductImg2] = useState();
    const [ProductImg3, setProductImg3] = useState();

    const [ProductImg4, setProductImg4] = useState();
    const [, setvendor_id] = useState('');

    const ProductImage1 = (e) => {
        setProductImg1(e.target.files[0]);
    }
    const ProductImage2 = (e) => {
        // file_upload: e.target.files[0]
        setProductImg2(e.target.files[0]);
    }
    const ProductImage3 = (e) => {
        // file_upload: e.target.files[0]
        setProductImg3(e.target.files[0]);
    }
    const ProductImage4 = (e) => {
        setProductImg4(e.target.files[0]);
    }
    useEffect(() => {
        fetch("http://localhost:3000/Adminlist", {
            method: "GET",
        }).then(response => response.json())
            .then(result => (
                setvendor_id(result)))
            .catch(error => console.log('error', error));
    }, [])

    const SaveUpload = async (e) => {
        const vendordata = JSON.parse(localStorage.getItem('adminid'))
        if (vendordata && vendordata.message === 'Login Successfully.') {
            const vendor_id = vendordata.data.map((i, key) => i._id)
            if (vendor_id[0]) {
                const formData = new FormData();
                formData.append("ProductImg1", ProductImg1);
                formData.append("ProductImg2", ProductImg2);
                formData.append("ProductImg3", ProductImg3);
                formData.append("ProductImg4", ProductImg4);
                formData.append("Name", Name);
                formData.append("Price", Price);
                formData.append("SoldPrice", SoldPrice);
                formData.append("Category", Category);
                formData.append("SubCategory", SubCategory);
                formData.append("Size", Size);
                formData.append("vendor_id", vendor_id[0]);
                formData.append("Description", Description);
                formData.append("nameImg1", ProductImg1.name);
                formData.append("nameImg2", ProductImg2.name);
                formData.append("nameImg3", ProductImg3.name);
                formData.append("nameImg4", ProductImg4.name);
                const data = (Name, Price, SoldPrice, Category, SubCategory, Size, Description, vendor_id[0]
                )
                try {
                    const res = await axios.post(
                        "http://localhost:3000/productupload",
                        formData, {
                        body: data
                    }
                    )
                
                    if (res.statusText === "Created") {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                            swal({
                                title: "Product Uploadd Successfully!",
                                icon: "success",
                                button: "Cancel",
                            });

                            navigate().refresh()
                        }, 2000);

                    }
                } catch (ex) {
                
                }
            }
            else {
                console.log("error")
            }
        }
        else {
            swal("Please login to continue", {
                buttons: false,
                timer: 2000,
            });
            setTimeout(() => {
                window.location = '/admin/Login'
            }, 3000);
        }
    }
    const Cancel = () => {
        window.location.reload()
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
            <br></br>
            <Container>
                <Row >


                    <Card>



                        <Card.Body>
                            <Card.Title>Product Details</Card.Title>
                            <hr></hr>
                            <Form>
                                <Row >
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Name <em>*</em></Form.Label>
                                            <Form.Control type="text" required value={Name} onChange={(e) => setName(e.target.value)} />

                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label> Price <em>*</em></Form.Label>
                                            <Form.Control type="text" required value={Price} onChange={(e) => setPrice(e.target.value)} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Sold Price <em>*</em></Form.Label>
                                            <Form.Control type="text" required value={SoldPrice} onChange={(e) => setSoldPrice(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label>Category <em>*</em></Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            value={Category} onChange={(e) => setCategory(e.target.value)}>
                                            <option>Select Category</option>
                                            <option value="Vegetarian Pizza">Vegetarian Pizza</option>
                                            <option value="Non-veg Pizza">Non-veg Pizza</option>


                                        </Form.Select>

                                    </Col>

                                    {
                                        Category === "Vegetarian Pizza" ? (
                                            <Col md={4}>
                                                <Form.Label>Sub Category <em>*</em></Form.Label>
                                                <Form.Select aria-label="Default select example"
                                                    value={SubCategory} onChange={(e) => setSubCategory(e.target.value)}>
                                                    <option>Select Sub Category</option>
                                                    <option value="Farm house Pizza">Farm house Pizza</option>
                                                    <option value="Peppy paneer Pizza">Peppy paneer Pizza</option>
                                                    <option value="Margherita Pizza">Margherita Pizza</option>
                                                    <option value="Paneer Makhani Pizza">Paneer Makhani Pizza</option>
                                                    <option value="Deluxe Veggies Pizza">Deluxe Veggies Pizza</option>
                                                    <option value="Cheese & Tomato Pizza">Cheese & Tomato Pizza</option>

                                                </Form.Select>

                                            </Col>
                                        ) : <Col md={4}>
                                            <Form.Label>Sub Category <em>*</em></Form.Label>
                                            <Form.Select aria-label="Default select example"
                                                value={SubCategory} onChange={(e) => setSubCategory(e.target.value)}>
                                                <option>Select Sub Category</option>
                                                <option value="Chicken dominator Pizza">Chicken dominator Pizza</option>
                                                <option value="Chicken tikka Pizza">Chicken tikka Pizza</option>
                                                <option value="Chicken golden delight Pizza">Chicken golden delight Pizza</option>

                                            </Form.Select>

                                        </Col>
                                    }

                                    <Col md={4}>
                                        <Form.Label>Size <em>*</em></Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            required value={Size} onChange={(e) => setSize(e.target.value)} >
                                            <option>Select Size</option>
                                            <option value="3 Inch">3 Inch</option>
                                            <option value="6 Inch">6 Inch</option>
                                            <option value="9 Inch">9 Inch</option>
                                            <option value="12 Inch">12 Inch</option>
                                            <option value="13 Inch">13 Inch</option>
                                            <option value="14 Inch">14 Inch</option>
                                            <option value="15 Inch">15 Inch</option>
                                            <option value="16 Inch">16 Inch</option>
                                            <option value="17 Inch">17 Inch</option>
                                            <option value="18 Inch">18 Inch</option>
                                            <option value="19 Inch">19 Inch</option>
                                            <option value="20 Inch">20 Inch</option>


                                        </Form.Select>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Description"
                                            style={{ height: '100px' }} value={Description} onChange={(e) => setDescription(e.target.value)}
                                        />

                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Image 1 <em>*</em></Form.Label>
                                            <Form.Control type="file" required onChange={ProductImage1} />

                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Product Image 2 <em>*</em></Form.Label>
                                            <Form.Control type="file" required onChange={ProductImage2} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Product Image 3 <em>*</em></Form.Label>
                                            <Form.Control type="file" required onChange={ProductImage3} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Product Image 4 <em>*</em></Form.Label>
                                            <Form.Control type="file" required onChange={ProductImage4} />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6} className="text-end">
                                        <button type="button" className="btn btn-danger btn-lg ms-2" variant="danger" onClick={Cancel}>Cancel</button>
                                        <button type="button" className="btn btn-warning btn-lg ms-2" variant="success" onClick={SaveUpload}>Submit form</button>
                                        {/* <Button  className="btn btn-warning btn-lg ms-2" variant="success" onClick={SaveUpload}>Submit form</Button> */}
                                    </Col>

                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default Upload