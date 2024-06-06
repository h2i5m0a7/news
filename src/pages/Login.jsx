import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';


const Login = () => {


  const [data,setData] = useState({
    username:"",
    password:""
  })
  const navigate = useNavigate();

  const handleChange= async e=>{
 setData({...data,[e.target.name]:e.target.value})
}
const{Login}= useContext(AuthContext)

const handleSubmit = async e=>{
  e.preventDefault();
  try{
  await Login(data)
  navigate("/")
 }
catch(err){
  console.log(err);
}
}
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username' required name="username" value={data.username} onChange={handleChange}/>
        <input type="text" placeholder='Password' required name="password" value={data.password} onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
        <span>Don't you have an account ?</span><div><Link className="link" to="/register">Register</Link></div>
      </form>
    </div>
  )
}

export default Login