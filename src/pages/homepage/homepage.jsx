import React, {useState, } from "react"

import "./homepage.styles.css"

import LandingScreen from "../landingScreen/landingScreen"
import DancingRobotScreen from "../dancingRobotScreen/dancingRobotScreen"
import CookingScreen from "../cookingScreen/cookingScreen"


const Homepage = () => {
    const [showStartButton, setShowStartButton] = useState(false)
    const [atCookingPage, setAtCookingPage] = useState(false)

    const toggleStartState = () => {
        setShowStartButton(true)
    }

    return (
        <div>
            {atCookingPage ? "" : <DancingRobotScreen showStartButton = {showStartButton}/>}
            {showStartButton ? "" : <LandingScreen toggleStartState = {toggleStartState}/>}
            <CookingScreen/>
        </div>
    )
}

export default Homepage