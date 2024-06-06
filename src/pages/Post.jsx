import {React ,useState,useEffect} from 'react'
import Menu from '../components/Menu'
import { useLocation} from 'react-router-dom'
import axios from 'axios'
import moment from "moment"

const Post = () => {
  const [posts,setPost]= useState({}) //single data is to be fetch 
  const location = useLocation();
  const postId= location.pathname.split("/")[2];
  console.log(location)
  useEffect(()=>{ //map is used for only arrays!
    const fetchData= async ()=>{ 
      try {
      
      const res = await axios.get(`http://192.168.1.78:8800/app/posts/${postId}`)
      setPost(res.data)

    }
    catch(err){
      console.log()
    }
    
  } 
  fetchData();
},[postId])
  return (
    
      <div className="post">
        <div className="outer">
        <div className="single">
          <div className="img">
          <img src={posts.img} alt="" />
          </div>
          <div className="content">
          <img src={posts.img} alt="" />
            <div className="info">
              <span>{posts.username}</span>
              <p>Posted {moment (posts.date).fromNow()}</p>
            </div>
          </div>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          </div>
          <div className="menu">
            <Menu/>
          
          
          </div>
        
        </div>
      </div>
  
  )
}

export default Post