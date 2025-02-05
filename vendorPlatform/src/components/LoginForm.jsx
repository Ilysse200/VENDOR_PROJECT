import React from "react"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const LoginForm  = ({handleForm}) => {
    return(
        <div className="container">
            <form className="form-login">
                <IoMdClose onClick={handleForm}/>
            <input type="text" placeholder='enter name'/>
            <input type="text" placeholder='enter name'/>
            <button type="login">Login</button>
            </form>
        </div>
    )

}
export default LoginForm;