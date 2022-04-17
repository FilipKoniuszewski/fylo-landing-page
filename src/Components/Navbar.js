import React from 'react';
import logo from "../Images/logo.svg";
import "./Navbar.css";

function Navbar(props) {
    function scrollIntoView(section) {
        let yOffset
        switch(section) {
            case props.home:
                yOffset = -120
                break
            case props.features:
                yOffset = -200
                break
            case props.demo:
                yOffset = -270
                break
            case props.testimonials:
                yOffset = -320
                break
            case props.sign:
                yOffset = -320
                break
        }
        const y = section.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    return (
        <header>
            <div className="logo" onClick={() => scrollIntoView(props.home)}>
                <img src={logo} alt="" />
            </div>
            <nav>
                <div className="nav__links">
                    <div className="to-features" onClick={() => scrollIntoView(props.features)}>
                        Features
                    </div>
                    <div className="to-demo" onClick={() => scrollIntoView(props.demo)}>
                        Demo
                    </div>
                    <div className="to-team" onClick={() => scrollIntoView(props.testimonials)}>
                        Testimonials
                    </div>
                    <div className="to-sign-in" onClick={() => scrollIntoView(props.sign)}>
                        Sign in
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;