import React, { useState } from "react";
import "../styles/AuthPage.css";

const AuthPage = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="auth-container">
      {/* Login Section */}
      <div className="auth-box">
        <h1>Login</h1>
        <form className="auth-form">
          <label>Username or email address <span className="required">*</span></label>
          <input type="text" required />

          <label>Password <span className="required">*</span></label>
          <input type="password" required />

          <div className="remember-section">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="auth-button">LOG IN</button>

          <a href="#" className="forgot-password">Lost your password?</a>
        </form>
      </div>

      {/* Register Section */}
      <div className="auth-box">
        <h1>Register</h1>
        <form className="auth-form">
          <label>Email address <span className="required">*</span></label>
          <input type="email" required />

          <p>A link to set a new password will be sent to your email address.</p>

          <div className="role-selection">

            {/*This content is the radio button with the customer option */}
            <div className="customerChoice">
            <input 
              type="radio" 
              id="customer" 
              name="role" 
              value="customer" 
              checked={role === "customer"}
              onChange={() => setRole("customer")}
            />
            <label htmlFor="customer">I am a customer</label>
            </div>

            {/*This content is the radio button with the vendor option */}
            <div className="vendorChoice">
            <input
              type="radio" 
              id="vendor" 
              name="role" 
              value="vendor"
              checked={role === "vendor"}
              onChange={() => setRole("vendor")}
            />
            <label htmlFor="vendor">I am a vendor</label>
            </div>
          </div>

          <button type="submit" className="auth-button">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
