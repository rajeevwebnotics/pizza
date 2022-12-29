
import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
function ProductDetails() {
    const [Data, setData] = useState([])
    const [Urlimg, setimgurl] = useState('')
    const port = 'http://localhost:3000';
    useEffect(() => {
        let id = window.location.pathname.replace('/ProductDetails/', '');
        fetch("http://localhost:3000/files/", {
            method: "GET"
        })
            .then(response => response.json())
            .then(result => {
                let singleData = result.filter((item) => item._id.toLowerCase().includes(id.trim().toLowerCase()))
                setData(singleData)
            })
            .catch(error => console.log('error', error));
    }, [])
    const ChanageImg = (url) => {
        const imgurl = `${port}/public/Assets/productImg/${url}`
        setimgurl(imgurl)
    }
    return (
        <>
            <Header />
            <div className="container">
                {
                    Data.map((items, i) => {
                        const ulr = `${port}/public/Assets/productImg/${items.nameImg2}`
                        console.log("ulr", ulr)
                        return (
                            <div className="product-content product-wrap clearfix product-deatil">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        {
                                            Urlimg ? (
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'Wristwatch by Ted Baker London',
                                                        src: Urlimg,
                                                        width: 700,
                                                        height: 400
                                                    },
                                                    largeImage: {
                                                        src: Urlimg,
                                                        width: 1200,
                                                        height: 1200
                                                    }
                                                }} />
                                            ) : <ReactImageMagnify {...{
                                                smallImage: {
                                                    alt: 'Wristwatch by Ted Baker London',

                                                    src: `${ulr}`,
                                                    width: 700,
                                                    height: 400
                                                },
                                                largeImage: {
                                                    src: `${ulr}`,
                                                    width: 1200,
                                                    height: 1200
                                                }
                                            }} />
                                        }
                                        <br></br>
                                        <Row>
                                            <Col md={3}>
                                                <a href="#" onClick={() => ChanageImg(items.nameImg1)}>
                                                    <img src={`${port}/public/Assets/productImg/${items.nameImg1}`} width={150} height={80} alt="" />
                                                </a>
                                            </Col>
                                            <Col md={3}>
                                                <a href="#" onClick={() => ChanageImg(items.nameImg2)}>
                                                    <img src={`${port}/public/Assets/productImg/${items.nameImg2}`} width={150} height={80} alt="" />  </a>
                                            </Col>
                                            <Col md={3}>
                                                <a href="#" onClick={() => ChanageImg(items.nameImg3)}>
                                                    <img src={`${port}/public/Assets/productImg/${items.nameImg3}`} width={150} height={80} alt="" /> </a>
                                            </Col>
                                            <Col md={3}>
                                                <a href="#" onClick={() => ChanageImg(items.nameImg4)}>
                                                    <img src={`${port}/public/Assets/productImg/${items.nameImg4}`} width={150} height={80} alt="" /> </a>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="col-md-5  col-sm-12 col-xs-12">
                                        <h2 className="name">
                                            {items.Name}
                                        </h2>
                                        <i className="fa fa-star fa-2x text-primary"></i>
                                        <i className="fa fa-star fa-2x text-primary"></i>
                                        <i className="fa fa-star fa-2x text-primary"></i>
                                        <i className="fa fa-star fa-2x text-primary"></i>
                                        <i className="fa fa-star fa-2x text-muted"></i>
                                        <span className="fa fa-2x"><h5>(109) Votes</h5></span>
                                        <a href="#">109 customer reviews</a>
                                        <hr />
                                        <h3 className="price-container">
                                            ₹ {items.SoldPrice}
                                            <small>*includes tax</small>
                                        </h3>
                                        <div className="certified">
                                            <ul>
                                                <li>
                                                    <a href="#">Delivery time<span>30 Mints</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Size<span>330*220</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <dt>Category</dt>
                                        <dd>{items.Category}</dd>
                                        <hr />
                                        <dt>Sub Category</dt>
                                        <dd>{items.SubCategory}</dd>
                                        <hr />
                                        <dt>Product by</dt>
                                        <dd><a href="#">Adeline</a></dd>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                                <a href="#" className="btn btn-success btn-lg">Add to cart</a>
                                            </div>
                                            <div className="col-sm-12 col-md-8 col-lg-8">
                                                <div className="btn-group pull-right">
                                                    <button className="btn btn-white btn-default"><i className="fa fa-star"></i> Add to wishlist</button>
                                                    <button className="btn btn-white btn-default"><i className="fa fa-envelope"></i> Contact Seller</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="description description-tabs">
                    <Row>
                        <Col md={5}>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Product Description">
                                    <strong>Description Title</strong>
                                    <p>
                                        Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue
                                        sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.
                                    </p>
                                </Tab>
                                <hr />
                                <Tab eventKey="profile" title="Specifications">
                                    <dl className="">
                                        <dt>Gravina</dt>
                                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                        <dd>Eget lacinia odio sem nec elit.</dd>
                                        <br />
                                        <dt>Test lists</dt>
                                        <dd>A description list is perfect for defining terms.</dd>
                                        <br />
                                        <dt>Altra porta</dt>
                                        <dd>Vestibulum id ligula porta felis euismod semper</dd>
                                    </dl>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={7}>
                            <form method="post" className="well padding-bottom-10" onsubmit="return false;">
                                <textarea rows="2" className="form-control" placeholder="Write a review"></textarea>
                                <div className="margin-top-10">
                                    <button type="submit" className="btn btn-sm btn-primary pull-right">
                                        Submit Review
                                    </button>
                                    <a href="#" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Location"><i className="fa fa-location-arrow"></i></a>
                                    <a href="#" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Voice"><i className="fa fa-microphone"></i></a>
                                    <a href="#" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Photo"><i className="fa fa-camera"></i></a>
                                    <a href="#" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add File"><i className="fa fa-file"></i></a>
                                </div>
                            </form>
                            <hr />
                            <div className="chat-body no-padding profile-message">
                                <ul>
                                    <li className="message">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="online" />
                                        <span className="message-text">
                                            <a href="#" className="username">
                                                Alisha Molly
                                                <span className="badge">Purchase Verified</span>
                                                <span className="pull-right">
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-muted"></i>
                                                </span>
                                            </a>
                                            Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved
                                        </span>
                                        <ul className="list-inline font-xs">
                                            <li>
                                                <a href="#" className="text-info"><i className="fa fa-thumbs-up"></i> This was helpful (22)</a>
                                            </li>
                                            <li className="pull-right">
                                                <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="message">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="online" />
                                        <span className="message-text">
                                            <a href="#" className="username">
                                                Aragon Zarko
                                                <span className="badge">Purchase Verified</span>
                                                <span className="pull-right">
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                    <i className="fa fa-star fa-2x text-primary"></i>
                                                </span>
                                            </a>
                                            Excellent product, love it!
                                        </span>
                                        <ul className="list-inline font-xs">
                                            <li>
                                                <a href="#" className="text-info"><i className="fa fa-thumbs-up"></i> This was helpful (22)</a>
                                            </li>
                                            <li className="pull-right">
                                                <small className="text-muted pull-right ultra-light"> Posted 1 year ago </small>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
