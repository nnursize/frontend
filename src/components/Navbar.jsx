import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { AuthContext } from "../context/authContext";

const Navbar=()=>{

    const {currentUser,logout}=useContext(AuthContext);  //user bilgisi
    const str1=JSON.stringify(currentUser?.role);
    const str2=JSON.stringify("admin");         //role adminse edit ve delete yapabilsin

    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="links">

                    <Link className="link" to="/?genre=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?genre=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?genre=technology">
                        <h6>TECH</h6>
                    </Link>
                    <Link className="link" to="/?genre=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to="/?genre=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?genre=food">
                        <h6>FOOD</h6>
                    </Link>
                    <form>
                        <input type="search" placeholder="Search..."/>
                        <Link className="link" to= "/register"/>
                    </form>
                    
                    {str1 === str2 && (
                    <Link className="link" to="/edit">
                        <h6>ADD MOVIE</h6>
                    </Link>
                    )}
                    <span>{currentUser?.username}</span>
                    {currentUser?( 
                        <span onClick={logout}>Logout</span>) :( 
                        <Link className="link" to="/login">Login</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar