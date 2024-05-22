import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  const posts=[
    {
      id:1,
      title:"camera",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"

    },
    {
      id:2,
      title:"camera",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"

    },
    {
      id:2,
      title:"camera",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:"https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"

    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map((post)=>(
            <div className="post" key={post.id}>
              <div className="img"><img src={post.image} alt="" /></div>
              <div className="content">
              <Link to={`post/${post.id}`} > <h4>{post.title}</h4>
              </Link>
              <p>{post.description}</p>
              <button>...More</button>
            </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Home