
import Header from "../Header";
import Footer from "../Footer";
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom' 
const Order = () => {
   const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('User'))
    const user_id = user ? user.data.map((i) => i._id) : ""
    const [Data, setData] = useState([]);
    const vendor = JSON.parse(localStorage.getItem('User'))
    if (vendor && vendor.message === 'Login Successfully.') {
        useEffect(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch("http://localhost:3000/listOrder", requestOptions)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(error => console.log('error', error));
        },
            [])
    }
    else {
        swal("Please login to continue", {
            buttons: false,
            timer: 2000,
        });
        setTimeout(() => {
            navigate('/Login')
        }, 3000);
    }
    const idfilter = Data.filter((item) => item.user_id.toLowerCase().includes(user_id ? user_id[0] : "".trim().toLowerCase()))
    return (
        <>
            <Header />
            <div className="container">
                <br/>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example" >
                    <Tab eventKey="home" title="latest Order">
                        {
                            idfilter.map((items, i) => {
                                let step1 = "deactive step0";
                                let step2 = "deactive step0";
                                let step3 = "deactive step0";
                                let step4 = "deactive step0";
                                if (items.status === "Process") {
                                    step1 = "active step0";
                                }
                                else if (items.status === "Confirmed") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                }
                                else if (items.status === "Prepared") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                    step3 = "active step0";
                                }
                                else if (items.status === "Completed") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                    step3 = "active step0";
                                    step4 = "active step0";
                                }
                                else {
                                    step1 = "deactive step0";
                                    step2 = "deactive step0";
                                    step3 = "deactive step0";
                                    step4 = "deactive step0";
                                }
                                return (
                                    <>
                                        {items.status === "Completed" ? (
                                            null
                                        ) : <div className="card my-3"  >
                                            <div className="row d-flex py-2  px-3 top">
                                                <div className="col-md-4 col-sm-12">
                                                    <div className="d-flex">
                                                        <h6>ORDER _ID <span className="text-primary font-weight-bold">#{items._id}</span></h6>
                                                    </div>
                                                    <div className="d-flex flex-column text-sm-right">
                                                        <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                                                        <p>Amount: <span className="font-weight-bold">{items.totalamount}</span></p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>Last Update <span className="text-primary font-weight-bold">{items.time}</span></h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-sm-12">
                                                    <div className="row d-flex justify-content-center">
                                                        <div className="col-12">
                                                            <ul id="progressbar" className="text-center">
                                                                <li className={step1}></li>
                                                                <li className={step2}></li>
                                                                <li className={step3}></li>
                                                                <li className={step4}></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center">
                                                        <div className="col-3">
                                                            <img className="icon" src="https://i.imgur.com/9nnc9Et.png" alt="img" />
                                                            <p className="font-weight-bold">Processed</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <img className="icon" src="https://i.imgur.com/u1AzR7w.png" alt="img" />
                                                            <p className="font-weight-bold">Confirmed</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <img className="icon" src="https://i.imgur.com/TkPm63y.png" alt="img" />
                                                            <p className="font-weight-bold">Prepared</p>
                                                        </div>
                                                        <div className="col-3">
                                                            <img className="icon" src="https://i.imgur.com/HdsziHP.png" alt="img" />
                                                            <p className="font-weight-bold">Completed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </>
                                )
                            })
                        }
                    </Tab>
                    <Tab eventKey="profile" title="Complete order">
                        {
                            idfilter.map((items, i) => {
                                console.log("items", items)
                                let step1 = "deactive step0";
                                let step2 = "deactive step0";
                                let step3 = "deactive step0";
                                let step4 = "deactive step0";

                                if (items.status === "Process") {
                                    step1 = "active step0";
                                }
                                else if (items.status === "Confirmed") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                }
                                else if (items.status === "Prepared") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                    step3 = "active step0";
                                }
                                else if (items.status === "Completed") {
                                    step1 = "active step0";
                                    step2 = "active step0";
                                    step3 = "active step0";
                                    step4 = "active step0";
                                }
                                else {
                                    step1 = "deactive step0";
                                    step2 = "deactive step0";
                                    step3 = "deactive step0";
                                    step4 = "deactive step0";
                                }
                                return (
                                    <>
                                        {items.status === "Completed" ? (
                                            <div className="card my-4"  >
                                                <div className="row d-flex py-2  px-3 top">
                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="d-flex">
                                                            <h6>ORDER _ID <span className="text-primary font-weight-bold">#{items._id}</span></h6>
                                                        </div>
                                                        <div className="d-flex flex-column text-sm-right">
                                                            <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                                                            <p>Amount: <span className="font-weight-bold">{items.totalamount}</span></p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <h6>Last Update <span className="text-primary font-weight-bold">{items.time}</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="row d-flex justify-content-center">
                                                            <div className="col-12">
                                                                <ul id="progressbar" className="text-center">
                                                                    <li className={step1}></li>
                                                                    <li className={step2}></li>
                                                                    <li className={step3}></li>
                                                                    <li className={step4}></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center">
                                                            <div className="col-3">
                                                                <img className="icon" src="https://i.imgur.com/9nnc9Et.png" alt="img" />
                                                                <p className="font-weight-bold">Processed</p>
                                                            </div>
                                                            <div className="col-3">
                                                                <img className="icon" src="https://i.imgur.com/u1AzR7w.png" alt="img" />
                                                                <p className="font-weight-bold">Confirmed</p>
                                                            </div>
                                                            <div className="col-3">
                                                                <img className="icon" src="https://i.imgur.com/TkPm63y.png" alt="img" />
                                                                <p className="font-weight-bold">Prepared</p>
                                                            </div>
                                                            <div className="col-3">
                                                                <img className="icon" src="https://i.imgur.com/HdsziHP.png" alt="img" />
                                                                <p className="font-weight-bold">Completed</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null

                                        }
                                    </>
                                )
                            })
                        }
                    </Tab>
                </Tabs>

            </div>
            <Footer />
        </>
    )
}
export default Order