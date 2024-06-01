import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

   const navigate= useNavigate();

  const [err, setErr] = useState(null);

  const handleChange = e => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
       await axios.post("http://192.168.1.90:8800/app/register", data);
       navigate("/login")
      
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder='Username' name='username' value={data.username} onChange={handleChange} required />
        <input type="email" placeholder='Email' name="email" value={data.email} onChange={handleChange} required />
        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} required />
        <button type="submit">Submit</button>
        {err && <p style={{ color: "red" }}>{err}</p>}
      </form>
    </div>
  );
};

export default Register;
