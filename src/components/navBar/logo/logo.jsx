import React from "react"

import "./logo.styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Logo = _ => {
    return(
        <div className="app-logo">
            <span className="logo-text">Cookerino</span>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    )
}

export default Logo