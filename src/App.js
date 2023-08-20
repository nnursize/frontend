
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Film from "./pages/Film"
import Edit from "./pages/Edit"
import Actor from "./pages/Actor"
import Director from "./pages/Director"
import "./style.scss"

const Layout=()=>{
  return(
      <>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </>
  );
};

const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/movie/:d",
        element: <Film/>
      },
      {
        path:"/edit",
        element: <Edit/>
      },
    ]
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/edit",
    element: <Edit/>,
  },
  {
    path:"/film",
    element: <Film/>,
  },
  {
    path:"/actor",
    element: <Actor/>,
  },
  {
    path:"/director",
    element: <Director/>,
  },
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
