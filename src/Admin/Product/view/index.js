
import { Row, Card, Container, Table } from 'react-bootstrap'
import Header from "../../Header";
import React, { useEffect, useState } from 'react';
const port = 'http://localhost:3000';
const View = () => {
    const [idfilter, setidfilter] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch('http://localhost:3000/files');
            const json = await response.json();
            console.log("json", json)
            const vendor = JSON.parse(localStorage.getItem('adminid'))
            const vendor_id = vendor.data.map((i, key) => i._id)
            setidfilter(json.filter((item) => item.vendor_id.toLowerCase().includes(vendor_id[0].toLowerCase())))
        }
       fetchProduct();
    }, []);

    return (
        <>
            <Header />
            <br></br>
            <Container>
            <h5>Products : </h5>
                <Row >
                    <Card>
                        <Table class="table align-middle mb-0 bg-white" >
                            <thead class="bg-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Sold Price</th>
                                    <th>Size</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {idfilter.map((items, i) => {
                                         const ulr = `${port}/public/Assets/productImg/${items.nameImg2}`
                                    return (
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img
                                                        src={ulr}
                                                        class="rounded-circle"
                                                        alt=""
                                                        width="65px" height="65px"
                                                    />
                                                    <div class="ms-3">
                                                        <p class="fw-bold mb-1">{items.Name}</p>
                                                        <p class="text-muted mb-0"><b>Category</b> : {items.Category}</p>
                                                        <p class="text-muted mb-0"><b>Sub Category</b> : {items.SubCategory}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p class="fw-normal mb-1"> {items.Price}</p></td>
                                            <td> <p class="fw-normal mb-1"> {items.SoldPrice}</p></td>
                                            <td><p class="fw-normal mb-1"> {items.Size}</p></td>
                                            <td><button
                                                    type="button"
                                                    class="btn btn-link btn-rounded btn-sm fw-bold"
                                                    data-mdb-ripple-color="dark"
                                                >
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
export default View