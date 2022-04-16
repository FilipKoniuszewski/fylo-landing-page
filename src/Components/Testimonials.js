import React from 'react'
import "./Testimonials.css"
import profile1 from "../Images/profile-1.jpg"
import profile2 from "../Images/profile-2.jpg"
import profile3 from "../Images/profile-3.jpg"
import quotes from "../Images/bg-quotes.png"

function Testimonials(props) {
    return (
        <section className="testimonials">
            <img className="quotes" src={quotes} alt="" />
            <div className="testimonials-content">
                <div className="testimonials-card">
                    <div className="testimonial">
                        Fylo has improved our team productivity 
                        by an order of magnitude. Since making the 
                        switch our team has become a well-oiled 
                        collaboration machine.
                    </div>
                    <div className="profile">
                        <img src={profile1} alt="" />
                        <div>
                            <span>Satish Patel</span>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="testimonial">
                        Fylo has improved our team productivity 
                        by an order of magnitude. Since making the 
                        switch our team has become a well-oiled 
                        collaboration machine.
                    </div>
                    <div className="profile">
                        <img src={profile2} alt="" />
                        <div>
                            <span>Bruce McKenzie</span>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="testimonial">
                        Fylo has improved our team productivity by an 
                        order of magnitude. Since making the switch our 
                        team has become a well-oiled collaboration machine.
                    </div>
                    <div className="profile">
                        <img src={profile3} alt="" />
                        <div>
                            <span>Iva Boyd</span>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;