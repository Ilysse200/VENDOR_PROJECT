import React, {useState} from "react";
import '../styles/states.css';
import { IoMdClose } from "react-icons/io";
import RegisterForm from "./RegisterForm";

const UsestateHook = ({handleLoginForm}) => {

    const [forms, setForms] = useState(false);
    

    const handleRegister = () => {
        setForms(!forms);
    }
    

    return(
        <div className="containerLogin">
        
        <div className="containerForm">
                    <form className="login-form">
                        <p className="login-title">Login form</p>
                        <IoMdClose onClick={handleLoginForm} className="closeIcon"/>
                        <input type='text' placeholder="enter username" className="input"></input>
                        <input type="email" placeholder="enter email" className="input"></input>
                        <button type="button">Login</button>
                        
                        <p className="registerLink">No account? 
                        <span className="registerPath" onClick={handleRegister}> Register</span>
                            </p>
                </form>
                </div>
                
            {forms && <RegisterForm handleRegister={handleRegister} handleLoginForm={handleLoginForm}/> }
                
        </div>
                
                
           
    )
}
export default UsestateHook;

