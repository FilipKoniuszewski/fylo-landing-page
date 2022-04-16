import React, {useEffect, useState} from 'react'
import "./Register.css"

function Register(props) {
    const [email, setEmail] = useState()
    
    const [isEmailValid, setIsEmailValid] = useState();

    function ValidateEmail(email) {
        return (
            email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    }
    
    useEffect(() => {
        if (!email) setIsEmailValid("")
    }, [email])
    
    function HandleSubmit(e) {
        e.preventDefault();
        if (ValidateEmail(email)) {
            setIsEmailValid(true)
        }
        else {
            setIsEmailValid(false)
        }
    }
    
    return (
        <section className="register">
            <div className="register-content">
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free 
                    starter tier is extremely generous. If you have 
                    any questions, our support team would be happy to 
                    help you.</p>
                <form>
                    <label htmlFor="email">
                    </label>
                    <input type="text"
                           name="email"
                           id="email"
                           placeholder="email@example.com"
                           value={email}
                           onChange={e => setEmail(e.target.value) }/>
                    <input type="submit"
                           name="submit"
                           id="submit"
                           onClick={(e) => HandleSubmit(e)}
                           value="Get Started For Free"/>
                </form>
                {isEmailValid 
                    ? <p className="emailValid">
                        Email successfully sent
                    </p>
                    : isEmailValid === false 
                        ? <p className="emailNotValid">
                            Email is incorrect
                        </p>
                        : <p></p>}
            </div>
        </section>
    );
}

export default Register;