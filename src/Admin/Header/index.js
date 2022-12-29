
import React, {  } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom' 

  
const Slider = () => {
    const navigate = useNavigate()
    const login = JSON.parse(localStorage.getItem('adminid'));

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='home' variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand onClick={()=>navigate("./")}><h1>PizzaKart</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate("/admin/products")}>Products</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/admin/upload")}>Upload</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/admin/Order")}>Order</Nav.Link>
      
                        </Nav>
                        <Nav>
                            <Nav.Link className="Login" onClick={()=>navigate("/admin/signup")}>Register</Nav.Link>
                            {
                               login && login.message === "Login Successfully." ? (
                                    <Nav.Link className="Login" onClick={()=>navigate("/admin/Logout")}>Logout</Nav.Link>
                                ) : <Nav.Link className="Login" onClick={()=>navigate("/admin/login")}>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Slider;