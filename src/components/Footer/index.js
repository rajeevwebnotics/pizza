import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <footer id="colophon" class="site-footer footer-v1">
                <div class="col-full">
                    <div class="footer-social-icons">
                        <span class="social-icon-text">Follow us</span>
                        <ul class="social-icons list-unstyled">
                            <li><Link class="fa fa-facebook" to="#"></Link></li>
                            <li><Link class="fa fa-twitter" to="#"></Link></li>
                            <li><Link class="fa fa-instagram" to="#"></Link></li>
                            <li><Link class="fa fa-youtube" to="#"></Link></li>
                            <li><Link class="fa fa-dribbble" to="#"></Link></li>
                        </ul>
                    </div>
                    <div class="footer-logo">
                        <a href="index.html" class="custom-logo-link" rel="home">
                        </a>
                    </div>
                    <div class="site-address">
                        <ul class="address">
                            <li>PizzaKart Restaurant</li>
                            <li>Sector 59 Noida Utter Pradesh</li>
                            <li>Telephone: +1 555 1234</li>
                            <li>Fax: +1 555 4444</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div class="site-info">
                <p class="copyright">Copyright © 2022 PizzaKart. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer;