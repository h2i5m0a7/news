import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom"
import "./app.scss" 

import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
        element: <Home/>,
        },
      {
        path: "/post/:id",
      element: <Post/>,
      },
      {
        path: "/write",
      element: <Write/>,
      },
    ]
    },
    {
      path: "/login",
    element: <Login/>,
    },
    {
      path: "/register",
    element: <Register/>,
    },
  ]);
  return (
    <div className="App">
      <div className="container">
          <RouterProvider router={router} />     
    </div>
    </div>
  );
}

export default App;
