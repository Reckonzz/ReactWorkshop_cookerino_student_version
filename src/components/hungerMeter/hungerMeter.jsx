import { faBalanceScale } from "@fortawesome/free-solid-svg-icons"
import React from "react"

import "./hungerMeter.styles.css"

const HungerMeter = (props) => {
    return(
        <div className="section hunger-meter-container">
            hunger meter
            <div className="hunger-meter">
                <div style={{transform: `scaleY(${props.hunger/100})`,backgroundColor:`${props.hunger===100 ? "rgb(40, 170, 80)":"rgb(56, 165, 255)"}`}} className="hunger-bar"></div>
            </div> 
        </div>
    )
}

export default HungerMeter