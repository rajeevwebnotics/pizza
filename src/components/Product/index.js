import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/orderSlice'
const Product = () => {
    const [Data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const port = 'http://localhost:3000';
    const dispatch = useDispatch()
    useEffect(() => {
       
        fetch(`http://localhost:3000/files`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(error => console.log('error', error));
      
    },
        [isLoading])
    const handleClick = (items) => {
        dispatch(addToCart(items));
        setLoading(true);
    }
  
    return (
        <>
            <Container >
                <br></br>
                <Row >
                    {
                        Data.map((items, i) => {
                            const ulr = `${port}/public/Assets/productImg/${items.nameImg2}`
                            console.log("ulr", ulr)
                            return (
                                <Col md={6}>
                                    <br></br>
                                    <Card >
                                        <Row>
                                            <Col md={5}> <Card.Img variant="top" src={ulr} /></Col>
                                            <Col md={7}>
                                                <Card.Body className='product'>
                                                <Card.Text> <b>Name :</b> {items.Name} </Card.Text>
                                                    <Card.Text><b>Price :</b> ₹ {items.SoldPrice}</Card.Text>
                                                    <Card.Text>
                                                        <b>Discb :</b> {items.Description.split('', 30)}
                                                    </Card.Text>
                                                 
                                                    <Button
                                                        variant="primary"
                                                        className='Buy'
                                                     
                                                        onClick={() =>  handleClick(items)}>
                                                        {'Add Cart'}
                                                    {/* <Button className='Buy' onClick={() => AddCard(items)}>Add Cart</Button> */}       </Button>
                                                </Card.Body></Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </>
    )
}
export default Product;