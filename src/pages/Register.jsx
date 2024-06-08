import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [ data,setData] = useState({
    username:"",
    email:"",
    password:""
    })
    const [error,setError] = useState(null)

    // console.log(data)
    const handleChange=e=>{
      setData(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const navigate = useNavigate();
    const handleSubmit = async e=>{
      e.preventDefault();
      try{
       await axios.post(" http://localhost:8800/app/register",data)
       navigate("/login")
   
    }
    catch(err){
      setError(err.response.data)
      console.log(err)
    }


    }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username' name="username" required onChange={handleChange}/>
        <input type="email" placeholder='Email' name="email"required onChange={handleChange}/>
        <input type="password" placeholder='Password'name="password" required onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{color:"red"}}>{error}</p>}
        <span>Don't you have an account ?</span><div><Link className="link" to="/login">Register</Link></div>
      </form>
    </div>
  )
}

export default Register