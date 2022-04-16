import React from 'react';
import "./Footer.css";
import phoneIcon from "../Images/icon-phone.svg";
import mailIcon from "../Images/icon-email.svg";
import locationIcon from "../Images/icon-location.svg";
import logo from "../Images/logo.svg"
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import { IconContext } from "react-icons";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__nav-section">
                    <div className="footer__description">
                        <img src={locationIcon} alt="" />
                        <div className="description">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua
                        </div>
                    </div>
                    <div className="footer__contact">
                        <div className="contact-phone">
                            <img src={phoneIcon} alt="" />
                            <div className="contact-phone-number">
                                +1-543-123-4567
                            </div>
                        </div>
                        <div className="contact-email">
                            <img src={mailIcon} alt="" />
                            <div className="email-address">
                                example@fylo.com
                            </div>
                        </div>
                    </div>
                    <div className="footer__nav-links">
                        <div className="nav__about-us">
                            About Us
                        </div>
                        <div className="nav__jobs">
                            Jobs
                        </div>
                        <div className="nav__press">
                            Press
                        </div>
                        <div className="nav__blog">
                            Blog
                        </div>
                    </div>
                    <div className="footer__privacy">
                        <div className="nav__contact-us">
                            Contact Us
                        </div>
                        <div className="nav__terms">
                            Terms
                        </div>
                        <div className="nav__privacy">
                            Privacy
                        </div>
                    </div>
                    <div className="footer__socials">
                        <IconContext.Provider value={{ size: '1.2em' }}>
                            <span><FaFacebookF /></span>
                            <span><FaTwitter /></span>
                            <span><FiInstagram /></span>
                        </IconContext.Provider>
                    </div>
                </div> 
            </div>
            
        </footer>
    );
}

export default Footer;