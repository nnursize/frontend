import React from "react"
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"

const Navbar=()=>{
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
                    <span>John</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar