import React, {useEffect} from 'react';
import intro from "../Images/illustration-intro.png";
import "./Intro.css"
import {useOutletContext} from "react-router-dom";

function Intro(props) {
    const { homeRef } = useOutletContext();
    
    return (
        <section className="intro" ref={homeRef}>
            <img src={intro} alt="" />
            <h1>
                All your files in one secure
                location, accessible anywhere.
            </h1>
            <p>
                Fylo stores all your most important files in
                one secure location. Access them wherever you need,
                share and collaborate with friends family, and co-workers.
            </p>
            <div className="get-started">
                Get Started
            </div>
        </section>
    );
}

export default Intro;