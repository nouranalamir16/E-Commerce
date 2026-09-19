import { useState } from "react";
import "./registerPage.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // تتأكد إن الإيميل مش موجود بالفعل
    const existingUser = storedUsers.find((u) => u.email === email);
    if (existingUser) {
      alert("Email already registered. Please login.");
      navigate("/login"); 
      return;
    }

    // إنشاء مستخدم جديد
    const newUser = { username, email, password };
    storedUsers.push(newUser);

    // حفظه في localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));

  };
  return (
    <div className="registerPage">
          <div className="container">
      <div className="register">
        <form action="" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <hr />
          <div className="inputs">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage;
