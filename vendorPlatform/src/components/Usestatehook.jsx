import React, {useState} from "react";
import '../styles/states.css';

const UsestateHook = ({handleLoginForm}) => {
    return(
            <div className="containerLogin">
                <div className="containerForm">
                    <form className="login-form">
                        <p className="login-title">Login form</p>
                        <input type='text' placeholder="enter username" className="input"></input>
                        <input type="email" placeholder="enter email" className="input"></input>
                        <button type="button">Login</button>
                        <p className="registerLink">No account? register</p>
                </form>
                </div>
                <div className="containerForm">
                    <form className="login-form">
                        <p className="login-title">Register form</p>
                        <input type='firstName' placeholder="enter firstName" className="input"></input>
                        <input type="lastName" placeholder="enter lastName" className="input"></input>
                        <input type="password" placeholder="enter password" className="input"></input>
                        <button type="button">Login</button>
                        <p className="registerLink">No account? register</p>
                </form>
                </div>
            </div>
    )
}
export default UsestateHook;

