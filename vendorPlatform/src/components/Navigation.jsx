import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";

const Navigation = () =>{
    // declaration of usestate demonstration components

const [form, setForm] = useState(false);

const handleForm=()=> {
  setForm(!form);
}


    return(
        <div>
            {/*beggining of usage of states  */}
      {form && <LoginForm handleForm={handleForm}/>}
      <button type='button'onClick={handleForm}>view</button>
        </div>
    )
}
export default Navigation;