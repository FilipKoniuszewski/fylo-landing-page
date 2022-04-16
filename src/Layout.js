import React from 'react';
import Navbar from "./Components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";

function Layout(props) {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;