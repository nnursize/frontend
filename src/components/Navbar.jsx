import React from "react"
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import "../App.css"
import Users from "../pages/Users"

const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="container">
                <img className="logo" src={Logo} alt=""/>
                <div className="links">
                    <Link className="link" to='/users'>
                        <h6 className="users-h6">Kullanıcılar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </Link>
                    <Link className="link" to="/?cat=art">
                        <h6>Film Listesi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>Hesap Bilgileri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    </Link>
                    <Link className="link" to="/login">
                        <h6>Çıkış Yap</h6>
                    </Link>

                    {/*<form>
                        <input type="search" placeholder="Search..."/>
                        <Link className="link" to= "/register"/>
                    </form>
                    <span>John</span>
                    <span>Logout</span>
                    */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar