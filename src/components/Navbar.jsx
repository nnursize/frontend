import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { AuthContext } from "../context/authContext";
import "../App.css"
import Users from "../pages/Users"

const Navbar=()=>{

    const {currentUser,logout}=useContext(AuthContext);  //user bilgisi
    const str1=JSON.stringify(currentUser?.role);
    const str2=JSON.stringify("admin");         //role adminse edit ve delete yapabilsin

    return(
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="links">



                    <Link className="link" to='/users'>
                        <h6 className="users-h6">Kullanıcılar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </Link>



                    <Link className="link" to="/?cat=art">
                        <h6>Film Listesi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </Link>



                    <h6>Hesap Bilgileri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>



                    <Link className="link" to="/login">
                        <h6>Çıkış Yap</h6>
                    </Link>
                    
                    <span>{currentUser?.username}</span>
                    {currentUser?( 
                        <span onClick={logout}>Logout</span>) :( 
                        <Link className="link" to="/login">Login</Link>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar