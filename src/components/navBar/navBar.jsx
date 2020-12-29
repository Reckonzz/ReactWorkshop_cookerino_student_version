import React from "react"

import "./navBar.styles.css"

import NavItem from "./navItem/navItem"
import Logo from "./logo/logo"

const Navbar = () => {
    const navItems = ['Home', 'About', 'Contact us', 'Blog']
    return(
        <nav className="navbar">
            <Logo/>            
            {navItems.map( (text, idx) => <NavItem key={idx} text={text} />)}
        </nav>
    )
}

export default Navbar