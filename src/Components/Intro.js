import React from 'react';
import intro from "../Images/illustration-intro.png";
import "./Intro.css"

function Intro(props) {
    return (
        <section className="intro">
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