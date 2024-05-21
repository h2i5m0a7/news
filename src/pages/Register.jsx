import React from 'react'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form> 
        <input type="text" placeholder='Username' required />
        <input type="email" placeholder='Email' required />
        <input type="text" placeholder="Moblie-Number" required />
        <input type="password" placeholder='Password' required />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Register