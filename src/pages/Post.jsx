import {React ,useState,useEffect,useContext} from 'react'
import Menu from '../components/Menu'
import { useLocation,Link,  useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios'
import moment from "moment"
import icon2 from "../img/icon2.jpg"
import edit from '../img/edit.jpeg'


const Post = () => {
  const [posts,setPost]= useState({}) //single data is to be fetch 
  const location = useLocation();
  const{currentUser}= useContext(AuthContext)
  const postId= location.pathname.split("/")[2];
  console.log(location)
  const navigate =useNavigate();
  useEffect(()=>{ //map is used for only arrays!
    const fetchData= async ()=>{ 
      try {
      const res = await axios.get(`http://localhost:8800/app/posts/${postId}`)
      setPost(res.data)
    }
    catch(err){
      console.log()
    }
  } 
  fetchData();
},[postId])

const deletePost= async ()=>{ 
  try {
        await axios.delete(`http://localhost:8800/app/posts/${postId}`,{
          withCredentials:true
        })
        navigate('/')
}
catch(err){
  console.log(err)
}
} 
    

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
              <p>Posted {moment(posts.date).fromNow()}</p>
            </div>
            {currentUser?.username===posts.username && (
            <div className="user">
            <Link to="/write" state={posts}> 
            <img src={edit} alt="" /></Link>
            <img src={icon2} alt="" onClick={deletePost}/>

            </div>
)}
          </div>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          </div>
          <div className="menu">
            <Menu 
            cat={posts.cat} 
            id={posts.id}/>
          
          
          </div>
        
        </div>
      </div>
  
  )
}

export default Post