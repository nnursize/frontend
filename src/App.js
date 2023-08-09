
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
import FilmDetails from "./pages/FilmDetails"
import Edit from "./pages/Edit"
import "./style.scss"
import "./App.css"
import Users from "./pages/Users"

const Layout=()=>{
  return(
      <div className="main">
          <Navbar/>
          <Outlet/>
      </div>
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
        element: <FilmDetails/>
      },
      {
        path:"/edit",
        element: <Edit/>
      },
      {path:"/users",
    element: <Users/>}
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
    path:"/filmDetails",
    element: <FilmDetails/>,
  },
  {
    path:"/users",
    element: <Users/>,
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
