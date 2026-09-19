import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './loginPage.css'
import { useState } from 'react'

function LoginPage() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

     const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("User not found. Please register first.");
      navigate("/register");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/home"); 
  };

  return (
    <div className="loginPage">
      <div className='container'>
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <hr />
                <div className="inputs">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <label htmlFor="username">Password</label>
                    <input type="password" placeholder='Password' id='password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="check">
                    <p >Don't Have Account? <Link to= "../register"><span>Register</span></Link></p>
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default LoginPage

