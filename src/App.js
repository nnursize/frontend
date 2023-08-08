
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Single from "./pages/Single"
import Edit from "./pages/Edit"
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
        element: <Home/>
      },
      {
        path:"/post/:d",
        element: <Single/>
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
    path:"/single",
    element: <Single/>,
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
