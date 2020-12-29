import React from "react"

import "./navItem.styles.css"

const NavItem = (props) => {
    return(
        <div className="navItem">{props.text}</div> 
    )
}

export default NavItem