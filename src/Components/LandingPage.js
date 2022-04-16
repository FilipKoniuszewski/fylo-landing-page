import React from 'react'
import Intro from "./Intro";
import Features from "./Features";
import Demo from "./Demo";



function LandingPage(props) {
    return (
        <main className="Main">
            <Intro />
            <Features />
            <Demo />
        </main>
    );
}

export default LandingPage;