import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
      <form>
        <input type="text" placeholder='UserName' required />
        <input type="password" placeholder='Password' required />
        <button>Login</button>
        <span>Not Yet Registered?</span> <Link to="/register" className="link">Register</Link>
      </form>
    </div>
  )
}

export default Login