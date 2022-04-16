import React from 'react';
import accessImage from "../Images/icon-access-anywhere.svg";
import securityImage from "../Images/icon-security.svg";
import collabImage from "../Images/icon-collaboration.svg";
import storeImage from "../Images/icon-any-file.svg";
import "./Features.css"

function Features(props) {
    return (
        <section className="features">
            <div className="features-content">
                <div className="access">
                    <img src={accessImage} alt="" />
                    <h2>
                        Access your files, anywhere
                    </h2>
                    <p>
                        The ability to use a smartphone, tablet, or computer
                        to access your account means your files
                        follow you everywhere.
                    </p>
                </div>
                <div className="security">
                    <img src={securityImage} alt="" />
                    <h2>
                        Security you can trust
                    </h2>
                    <p>
                        2-factor authentication and user-controlled
                        encryption are just a couple of the security
                        features we allow to help secure your files.
                    </p>
                </div>
                <div className="collab">
                    <img src={collabImage} alt="" />
                    <h2>
                        Real-time collaboration
                    </h2>
                    <p>
                        Securely share files and folders with friends,
                        family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
                <div className="store">
                    <img src={storeImage} alt="" />
                    <h2>
                        Store any type of file
                    </h2>
                    <p>
                        Whether you're sharing holidays photos
                        or work documents, Fylo has you covered
                        allowing for all file types to be securely
                        stored and shared.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;