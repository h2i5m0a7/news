import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Post from "./pages/post";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import './app.scss';

const Layout= ()=>{
  return(
  <>
  <Nav/>
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
          path:"/",
          element:<Home/>
        },
        {
          path:"/post/:id",
          element:<Post/>
        },
        {
          path:"/write",
          element:<Write/>
        }
      ]

    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/register",
      element:<Register/>
    }
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
