import { Carousel } from 'react-bootstrap';
import React from 'react'
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="./assets/pizza1.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption className='First'>
                    <h1 className='text_slid'>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="./assets/capr.png"
                    alt="Second slide" 
                />
                <Carousel.Caption className='Second'>
                    <h1 className='text_slid'>Second slide label</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    )
} 
export default Slider