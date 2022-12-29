
import Header from "../Header"
import Footer from "../Footer"
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearCart } from '../../redux/features/orderSlice';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom' 
const Checkout = () => {
    const navigate = useNavigate()
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mobile_no, setMobile_no] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');
    const [status, ] = useState('Process');
    const [Loading, setLoading] = useState(false)
    const state = useSelector((state) => state.productSlice.cartItems);
    const inputTotals = (state.reduce((accum, curr) => (accum += parseFloat(curr.SoldPrice) * parseFloat(curr.cartQuantity)), 0));
    const cart = useSelector((state) => state.productSlice.cartItems);
    const dispatch = useDispatch();
    const totalcart = cart.map((i) => i)
    const Adminidcart = cart.map((i) => i.vendor_id)
    const OrderNow = () => {
        const vendor = JSON.parse(localStorage.getItem('User'))
        if (vendor && vendor.message === 'Login Successfully.') {
            const vendor_id = vendor.data.map((i, key) => i._id)
            var today = new Date(),
                curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            var date_date = new Date(),
                date = date_date.getFullYear() + '-' + (date_date.getMonth() + 1) + '-' + date_date.getDate();
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(
                {
                    "fname": fname,
                    "lname": lname,
                    "mobile_no": mobile_no,
                    "email": email,
                    "city": city,
                    "province": province,
                    "street": street,
                    "zip": zip,
                    "cart": totalcart,
                    "totalamount": inputTotals,
                    "status": status,
                    "date": date,
                    "time": curTime,
                    "vendor_id": Adminidcart[0],
                    "user_id": vendor_id[0]}
            );
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("http://localhost:3000/Orderlist", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.user_id) {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                            navigate('/Order')
                            dispatch(clearCart());
                        }, 2000);
                    }
                    else {
                        return <p>Username or password is incorrect!</p>
                    }
                })
                .catch(error => console.log('error', error));
        }
        else {
            swal("Please login to continue", {
                buttons: false,
                timer: 2000,
            });
            setTimeout(() => {
                window.location = '/Login'

            }, 3000);
        }
    }
    window.scrollTo(0,0);
    return (
        <>
            <div className="div_02">
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
                <div className="container mt-5 px-5">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className="mb-4">
                                <h2>Confirm order and pay</h2>
                                <span>please make the payment, after that you can enjoy all the features and benefits.</span>
                            </div>
                            <div className="card p-3">
                                <div className="row">
                                    <h6 className="text-uppercase">Customer Info</h6>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3">
                                            <span>First Name <em>*</em></span>
                                            <input type="text" name="name" className="form-control" required="required"
                                                value={fname} onChange={(e) => setFname(e.target.value)} />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3">
                                            <span>Last Name <em>*</em></span>
                                            <input type="text" name="name" className="form-control" required="required"
                                                value={lname} onChange={(e) => setLname(e.target.value)} />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>Mobile Number <em>*</em></span>
                                            <input type="text" name="Mobile" className="form-control" required="required"
                                                value={mobile_no} onChange={(e) => setMobile_no(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>Email <em>*</em></span>
                                            <input type="email" name="email" className="form-control" required="required"
                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-4">
                                    <h6 className="text-uppercase">Billing Address</h6>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2">
                                                <span>Street Address <em>*</em></span>
                                                <input type="text" name="Address" className="form-control" required="required"
                                                    value={street} onChange={(e) => setStreet(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2">
                                                <span>City <em>*</em></span>
                                                <input type="text" name="City" className="form-control" required="required"
                                                    value={city} onChange={(e) => setCity(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2">
                                                <span>State/Province <em>*</em></span>
                                                <input type="text" name="name" className="form-control" required="required"
                                                    value={province} onChange={(e) => setProvince(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2">
                                                <span>Zip code <em>*</em></span>
                                                <input type="text" name="name" className="form-control" required="required"
                                                    value={zip} onChange={(e) => setZip(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                            <div class="row">
                                <div class="text-end col-md-6"></div>

                                <div class="text-end col-md-6">
                                    <br></br>
                                    <button type="button" class="btn btn-danger btn-lg ms-2" variant="danger">Cancel</button>
                                    <button type="button" class="btn btn-warning btn-lg ms-2" variant="success" onClick={OrderNow}>Order Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br></br>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Checkout