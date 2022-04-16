import React, {useState} from 'react'
import "./Register.css"

function Register(props) {
    const [email, setEmail] = useState("")
    
    function HandleSubmit() {
        
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
                    <input type="email"
                           name="email"
                           id="email"
                           autoComplete="off"
                           placeholder="email@example.com"
                           value={email}
                           onChange={e => setEmail(e.target.value) }/>
                    <input type="submit"
                           name="submit"
                           id="submit"
                           onClick={(e) => HandleSubmit(e)}
                           value="Get Started For Free"/>
                </form>
            </div>
        </section>
    );
}

export default Register;