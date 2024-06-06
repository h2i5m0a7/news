import React, { useContext } from 'react'
import logo from '../img/1.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Nav = () => {
  const{currentUser,logout}= useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" height="50" width="50"/>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=politics">Politics</Link>
          <Link className="link" to="/?cat=entertaiment">Entertainment</Link>
          <Link className="link" to="/?cat=economics">Economics</Link>
          <Link className="link" to="/?cat=education">Education</Link>
          <Link className="link" to="/?cat=sports">Sports</Link>
          {currentUser? <span onClick={logout}>Logout</span>:<Link className="link" to="/login">Login</Link>}
          <span>{currentUser?.username}</span>
          <span className='write'>
            <Link className='link' to="/write"> Write+</Link>
           
          </span>
        </div>
      </div>
    </div>
  )
}

export default Nav