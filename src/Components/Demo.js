import React from 'react'
import "./Demo.css"
import demoImage from "../Images/illustration-stay-productive.png"
import goToDemo from "../Images/icon-arrow.svg"
import {useOutletContext} from "react-router-dom";

function Demo(props) {
    const { demoRef } = useOutletContext();
    
    return (
        <section className="demo" ref={demoRef}> 
            <div className="demo-content">
                <img src={demoImage} alt="" />
                <div className="demo-text-content">
                    <h1 className="demo-header">
                        Stay productive, wherever you are
                    </h1>
                    <p className="demo-paragraph">
                        Never let location be an issue when accessing
                        your files. Fylo has you covered for all of your
                        file storage needs.
                    </p>
                    <p className="demo-paragraph">
                        Securely share files and 
                        folders with friends, family and colleagues for 
                        live collaboration. No email attachments required.
                    </p>
                    <div className="go-to-demo">
                        See how Fylo works
                        <img src={goToDemo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demo;