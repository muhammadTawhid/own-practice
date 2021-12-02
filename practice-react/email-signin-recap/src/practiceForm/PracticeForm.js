import React, { useState } from 'react';
import './PracticeForm.css'

const PracticeForm = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <div>
            <div className="form-box">
                <h2>{newUser ? "Sign Up" : "Sign In"}</h2>
                <form action="">
                   { newUser && <label htmlFor="">Name</label> }
                   { newUser && <input type="text" required name="name" /> }

                    <label htmlFor="">Email</label>
                    <input type="text" required name="email" />

                    <label htmlFor="">Password</label>
                    <input type="text" required name="password" />
               
                    <button type="submit" className="submit-btn">{newUser ? "Sign Up" : "Sign In"}</button>
                </form>
                <p>{newUser ? "Already" : "Don't"} have an account ? <button className="toggle-btn" onClick={() => setNewUser(!newUser)}>{newUser ? "Sign in" : "Sign up"}</button></p>
                <h5><span>Or</span></h5>
                <button className="submit-btn">sign {newUser ? "up" : "in"} with google</button>
                <br/>
                <button className="submit-btn">sign {newUser ? "up" :"in"} with facebook</button>
            </div>
        </div>
    );
};

export default PracticeForm;