import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import '../styles/register.css';
const RegisterForm = ({handleRegister, handleClose}) => {




    return(
        <div className="containerRegister">
                        <div className="containerForm">
                            <form className="register-form">
                                <p className="register-title">Register form</p>
                                <IoMdClose onClick={handleRegister} className="closeIcons"/>
                                <input type='text' placeholder="enter username" className="input"></input>
                                <input type="email" placeholder="enter email" className="input"></input>
                                <input type="password" placeholder="enter password" className="input"></input>
                                <button type="button">Register</button>
                                
                                <p className="registerLink">Have an account? 
                                    <span className="registerPath">login</span>
                                    </p>
                        </form>
                        </div>
                    </div>
    )

}
export default RegisterForm;