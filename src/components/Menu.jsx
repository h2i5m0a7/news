import {React ,useState,useEffect} from 'react'
import axios from "axios"

const Menu = ({cat,id}) => {
    // const post=[{
    //     id:"1",
    //     title:"helllo",
    //     image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    // },
    // {
    //     id:"2",
    //     title:"helllo",
    //     image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    // },
    // {
    // id:"3",
    // title:"helllo",
    // image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
// }]
const [posts,setPost]= useState([]) //mutiple data is to be fetch 


  useEffect(()=>{
    const fetchData= async ()=>{
      try {
      
      const res = await axios.get(`http://localhost:8800/app/post/?cat=${cat}`)
      setPost(res.data)

    }
    catch(err){
      console.log()
    }
    
  } 
  fetchData();
},[cat])
const filterPost = posts.filter(filterData =>
  filterData.id !== id
)
return (
    <div className="home-2">
      <div className="posts-2">
        <h3>Suggested posts</h3>
{
  filterPost.map((post)=>(
    <div className="post-2" key={post.id}>
      <div className="img">
        <img src={post.img} alt="" />
      </div>
        <h4>{post.title}</h4>
        <button>Read More</button>
      </div>
    
  ))
}
      </div>
    </div>
  )
 
}

export default Menu