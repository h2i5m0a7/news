import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
const navigate= useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     await axios.post("login", data);
     navigate("/")
     
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name='username' required onChange={handleChange} />
        <input type="password" placeholder='Password' name="password" required onChange={handleChange} />
        <button type="submit">Login</button>
        <span>Not Yet Registered?</span> <Link to="/register" className="link">Register</Link>
        {err && <p style={{ color: "red" }}>{err}</p>}
      </form>
    </div>
  );
};

export default Login;
