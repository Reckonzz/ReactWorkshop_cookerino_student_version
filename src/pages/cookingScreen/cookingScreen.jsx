import React from "react"

import "./cookingScreen.styles.css"

// import InstructionPage from "../instructionPage/instructionPage"

const CookingScreen = () => {
    return(
        <div>
            <div className="nav-bar">
                <div className="brand-name">Cookerino</div> 
            </div>
            <div className="main-body">
                <div className='section ingredients'>
                    ingredients 
                </div>
                <div className='section stove'>
                    <button>cook</button>
                </div> 
                <div className="section hunger-meter">
                    hunger meter
                </div>
            </div>
        </div> 
    )
}

export default CookingScreen
