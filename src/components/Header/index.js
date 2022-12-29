
import React, { useState, useEffect } from 'react'
import { Navbar, Offcanvas, Nav, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/features/orderSlice';
import { Link } from 'react-router-dom';
const port = 'http://localhost:3000';
const Slider = (props) => {
    const { id } = props;
    console.log("id", id)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const login = JSON.parse(localStorage.getItem('User'));
    const state = useSelector((state) => state.productSlice.cartItems);
    const inputTotals = state.reduce((accum, curr) => (accum += curr.cartQuantity), 0);
    const cart = useSelector((state) => state.productSlice);
    // console.log(cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={3} xs={5}>
                        <div className="top_bar_contact_item">
                            <div className="top_bar_icon"></div>
                            <i class="fa fa-mobile" aria-hidden="true"></i>+91 9662313577</div>
                    </Col>
                    <Col md={3} xs={7} >
                        <div className="top_bar_contact_item">
                            <div className="top_bar_icon"></div>
                            <a href="mailto:fastsales@gmail.com">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i> Rajeev@pizzaKart.com</a>
                        </div>
                    </Col>
                    <Col md={3} >
                    </Col>
                    <Col md={3} xs={12} >
                        <div className="top_bar_content text-end">
                            <div className="top_bar_user">
                                <div><Link to="/Order">My order</Link></div>
                                <div><Link to="/Registration">Register</Link></div>
                                {
                                    login && login.message === "Login Successfully." ? (
                                        <div><Link to="/Logout">Logout</Link></div>
                                    ) : <div><Link to="/Login">Sign in</Link></div>
                                }
                            </div>
                            <div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Navbar collapseOnSelect expand="lg" className='home' variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand ><Link to='/'><h1>PizzaKart</h1></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="../#delivery_time">Menu</Nav.Link>
                            <Nav.Link href="../#offer">Offer</Nav.Link>
                            <Nav.Link href="../#How-it-works">How it works</Nav.Link>
                            <Nav.Link ><Link to='/contact'>Contact Us</Link></Nav.Link>
                        </Nav>
                        <div className="cart_icon" onClick={handleShow}>
                            <Link to="#"  >
                                <i class="fa fa-shopping-bag" ></i>
                                <div className="cart_count"><span>{inputTotals}</span></div>
                            </Link>
                        </div>
                        <div className="cart_content" onClick={handleShow}>
                            <div className="cart_text"><Link to="#">Cart</Link></div>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} className="me-2 offcanvas-end" placement='end' name='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                            </Offcanvas.Header>
                            <hr />
                            <Offcanvas.Body>
                                {cart.cartItems.length === 0 ? (
                                    <div className="cart-empty">
                                        <p>Your cart is currently empty</p>
                                    </div>
                                ) : (
                                    <div>
                                        <div >
                                            <ul className='title'>
                                                <li className="product">Product</li>
                                                <li className="Name">Name</li>
                                                <li className="quantity">Quantity</li>
                                                <li className="total">Total</li>
                                            </ul>
                                        </div>
                                        <div className="cart-items">
                                            {cart.cartItems &&
                                                cart.cartItems.map((cartItem) => (
                                                    <div className="cart-item" key={cartItem.id}>
                                                        <div className="cart-product">
                                                            <img src={`${port}/public/Assets/productImg/${cartItem.nameImg1}`} alt={cartItem.Name} width={100} />
                                                            <div className='Name'>
                                                                <p>{cartItem.Name}</p>
                                                                <button onClick={() => handleRemoveFromCart(cartItem)}> Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-product-quantity">
                                                            <button onClick={() => handleDecreaseCart(cartItem)}> - </button>
                                                            <div className="count">{cartItem.cartQuantity}</div>
                                                            <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                                        </div>
                                                        <div className="cart-product-total-price">
                                                            ₹ {parseFloat(cartItem.SoldPrice) * parseFloat(cartItem.cartQuantity)}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="cart-summary">
                                            <div className="cart-checkout">
                                                <div className="subtotal">
                                                    <span>Subtotal</span>
                                                    <span className="amount"> ₹ {(cart.cartItems.reduce((accum, curr) => (accum += parseFloat(curr.SoldPrice) * parseFloat(curr.cartQuantity)), 0))}</span>
                                                </div>
                                                <p>Taxes and shipping calculated at checkout</p>
                                                <button className="clear-btn" onClick={() => handleClearCart()}> Clear Cart </button>
                                                <Link to="/Checkout" className="btn btn-outline-dark Check-out">Check out</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Slider;