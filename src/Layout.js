import React, {useRef} from 'react';
import Navbar from "./Components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";

function Layout(props) {
    const homeRef = useRef(null);
    const featuresRef = useRef(null);
    const demoRef = useRef(null);
    const testimonialsRef = useRef(null);
    const signRef = useRef(null);
    
    return (
        <div>
            <Navbar 
                home={homeRef} 
                features={featuresRef} 
                demo={demoRef}
                testimonials={testimonialsRef} 
                sign={signRef}/>
            <Outlet 
                context={{homeRef, 
                    featuresRef,
                    demoRef,
                    testimonialsRef, 
                    signRef}}/>
            <Footer />
        </div>
    );
}

export default Layout;