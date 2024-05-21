import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../image/logo2.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container-2">
      <div className="logo" ><img src={logo2} alt="" height="50" width="50"/></div>
      <div className="links">
      <Link className="link" to="/? cat=politcs">
        <h5>Politics</h5>
        </Link>
        <Link className="link" to="/? cat=economy">
        <h5>Economy</h5>
        </Link>
        <Link  className="link" to="/? cat=Entertainment">
        <h5>Entertainment</h5>
        </Link>
        <Link className="link" to="/? cat=Environment">
        <h5>Environment</h5>
        </Link>
        <Link className="link" to="/? cat=Foriegn affairs">
        <h5>Foreign affairs</h5>
        </Link>
        <Link className="link" to="/? cat=sports">
        <h5>Sports</h5>
        </Link>
       <h4>Himani</h4> 
      <h4>Logout</h4>  
       <span className='write'>
        <Link className='link' to="/write">Write</Link>
        </span>
         
      </div>
    </div>
    </div>
  )
}

export default Navbar