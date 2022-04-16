import React from 'react';
import logo from "../Images/logo.svg";
import "./Navbar.css";

function Navbar(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <div className="nav__links">
                    <div className="to-features">
                        Features
                    </div>
                    <div className="to-team">
                        Team
                    </div>
                    <div className="to-sign-in">
                        Sign in
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;