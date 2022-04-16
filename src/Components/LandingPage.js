import React from 'react'
import Intro from "./Intro";
import Features from "./Features";
import Demo from "./Demo";
import Testimonials from "./Testimonials";
import Register from "./Register";

function LandingPage(props) {
    return (
        <main className="Main">
            <Intro />
            <Features />
            <Demo />
            <Testimonials />
            <Register />
        </main>
    );
}

export default LandingPage;