import React from "react"

import "./navBar.styles.css"

// import NavItem from "./navItem/navItem"
import Logo from "./logo/logo"

const Navbar = () => {
    const navItems = ['Home', 'About', 'Contact us', 'Blog']
    return(
        <nav className="navbar">
            <Logo/>            
        </nav>
    )
}

export default Navbar