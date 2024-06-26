import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [posts,setPost]= useState([]) //mutiple data is to be fetch 
  const cat = useLocation().search;
  console.log(cat);
  useEffect(()=>{
    const fetchData= async ()=>{
      try {
      
      const res = await axios.get(`http://localhost:8800/app/post${cat}`)
      setPost(res.data)

    }
    catch(err){
      console.log()
    }
    
  } 
  fetchData();
},[cat])
  return (
    <div className="home">
      <div className="posts">
{
  posts.map((post)=>(
    <div className="post" key={post.id}>
      <div className="img">
        <img src={`../upload/${post.img}`} alt="" />
      </div>
      <div className="content">
        <Link className='link' to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
        </Link>
        <h1>{post.description}</h1>
        <button>Read More</button>
      </div>
    </div>
  ))
}
      </div>
    </div>
  )
}

export default Home