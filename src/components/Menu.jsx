import React from 'react'

const Menu = () => {
    const post=[{
        id:"1",
        title:"helllo",
        image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    },
    {
        id:"2",
        title:"helllo",
        image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    },
    {
    id:"3",
    title:"helllo",
    image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
}]

return (
    <div className="home-2">
      <div className="posts-2">
        <h3>Suggested posts</h3>
{
  post.map((post)=>(
    <div className="post-2" key={post.id}>
      <div className="img">
        <img src={post.image} alt="" />
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