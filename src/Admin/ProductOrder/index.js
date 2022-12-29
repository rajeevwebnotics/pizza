import { Row, Col, Card, Container, Table } from 'react-bootstrap'
import Header from "../Header";
import React, { useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import ReactToPdf from "react-to-pdf";
const port = 'http://localhost:3000';
const ProductOrder = () => {
    const [idfilter, setidfilter] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch('http://localhost:3000/listOrder');
            const json = await response.json();
            const vendor = JSON.parse(localStorage.getItem('adminid'))
            const vendor_id = vendor.data.map((i, key) => i._id)
            var list = json.filter((item) => item.vendor_id.toLowerCase().includes(vendor_id[0].toLowerCase()))

            setidfilter(list)
           
            // setOrderlist(json)
        }
        // By moving this function inside the effect, we can clearly see the values it uses.    async function fetchProduct() {      const response = await fetch('http://myapi/product/' + productId);      const json = await response.json();      setProduct(json);    }
        fetchProduct();
    }, []);
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10, 16]
    };
    return (
        <>
            <Header />
            <br></br>
            <Container>
                <Row>
                    <Col md={8}>   <h5>Products : </h5></Col>
                    <Col md={4} >  <CSVLink data={idfilter}>Download CSV</CSVLink>
                        <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={1} y={1} scale={1}>
                            {({ toPdf }) => (
                                <button onClick={toPdf}>Generate pdf</button>
                            )}
                        </ReactToPdf>
                    </Col>
                </Row>
                <Row >
                    <Card >
                        <Table class="table align-middle mb-0 bg-white" ref={ref} style={{ height: 500 }} >
                            <thead class="bg-light">
                                <tr>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Delivery</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {idfilter.map((items, i) => {
                                    console.log("items", items)

                                    return (
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">

                                                    <div class="ms-3">

                                                        <p class="text-muted mb-0">Name : {items.fname} {items.lname}</p>
                                                        <p class="text-muted mb-0">Mobile No : {items.mobile_no}</p>
                                                        <p class="text-muted mb-0">Email : {items.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {items.cart.map((items, i) => {
                                                    const ulr = `${port}/public/Assets/productImg/${items.nameImg2}`
                                                    return (
                                                        <div class="d-flex align-items-center">
                                                            <img
                                                                src={ulr}
                                                                class="rounded-circle"
                                                                alt=""
                                                                width="65px" height="65px"
                                                            />
                                                            <div class="ms-3">
                                                                <p class="fw-bold mb-1">{items.Name}</p>
                                                                <p class="text-muted mb-0">Category : {items.Category}</p>
                                                                <p class="text-muted mb-0">Sub Category : {items.SubCategory}</p>
                                                                <p class="text-muted mb-0">Qty : {items.cartQuantity}</p>
                                                            </div>
                                                        </div>
                                                    )} ) }
                                            </td>

                                            <td>
                                                <div class="d-flex align-items-center">

                                                    <div class="ms-3">

                                                        <p class="text-muted mb-0">Street : {items.street} </p>
                                                        <p class="text-muted mb-0">City : {items.city},{items.zip}</p>
                                                        <p class="text-muted mb-0">Province : {items.province}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="fw-normal mb-1"> {items.status}</p>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    class="btn btn-link btn-rounded btn-sm fw-bold"
                                                    data-mdb-ripple-color="dark">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default ProductOrder