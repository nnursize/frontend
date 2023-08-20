import Logo from "../img/me.png"
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

                    <Link className="link" to="/?genre=comedy">
                        <h6>COMEDY</h6>
                    </Link>
                    <Link className="link" to="/?genre=drama">
                        <h6>DRAMA</h6>
                    </Link>
                    <Link className="link" to="/?genre=romance">
                        <h6>ROMANCE</h6>
                    </Link>
                    <Link className="link" to="/?genre=scifi">
                        <h6>SCI-FI</h6>
                    </Link>
                    <Link className="link" to="/?genre=horror">
                        <h6>HORROR</h6>
                    </Link>
                    <Link className="link" to="/?genre=adventure">
                        <h6>ADVENTURE</h6>
                    </Link>
                    <form>
                        <input type="search" placeholder="Search..."/>
                        <Link className="link" to= "/register"/>
                    </form>
                    
                    {str1 === str2 && (
                    <Link className="link" to="/edit">
                        <h6>Add Movie</h6>
                    </Link>
                    )}

                    {str1 === str2 && (
                    <Link className="link" to="/director">
                        <h6>Add Director</h6>
                    </Link>
                    )}

                    {str1 === str2 && (
                    <Link className="link" to="/actor">
                        <h6>Add Actor</h6>
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