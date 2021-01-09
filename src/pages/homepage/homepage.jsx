import React, { useState } from "react"

import "./homepage.styles.css"

import LandingScreen from "../landingScreen/landingScreen"
import DancingRobotScreen from "../dancingRobotScreen/dancingRobotScreen"
import CookingScreen from "../cookingScreen/cookingScreen"
import InstructionPage from "../instructionPage/instructionPage"

const Homepage = () => {
    const [showStartButton, setShowStartButton] = useState(false)
    const [atCookingPage, setAtCookingPage] = useState(false)

    const toggleStartState = () => {
        setShowStartButton(true)
    }

    const toggleAtCookingPage = () => {
        setAtCookingPage(true)
    }

    return (
        <div className="home-page">
            {atCookingPage ? "" : <DancingRobotScreen toggleAtCookingPage={toggleAtCookingPage} showStartButton = {showStartButton}/>}
            {showStartButton ? "" : <LandingScreen toggleStartState = {toggleStartState}/>}
            {atCookingPage ? <InstructionPage/> : ""}
            <CookingScreen/>
        </div>
    )
}

export default Homepage