
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import FilmList from "./pages/FilmList"
import Register from "./pages/Register"
import Login from "./pages/Login"
import FilmDetails from "./pages/FilmDetails"
import Edit from "./pages/Edit"
import Users from "./pages/Users"
import AddFilm from "./pages/AddFilm"
import "./style.scss"
import "./App.css"

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
        element: <FilmList/>
      },
      {
        path:"/post/:d",
        element: <FilmDetails/>
      },
      {
        path:"/edit",
        element: <Edit/>
      },
      {
        path:"/add-film",
        element: <AddFilm/>
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
    path:"/add-film",
    element: <AddFilm/>
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
