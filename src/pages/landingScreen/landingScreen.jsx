import React from 'react'

import "./landingScreen.styles.css"

const LandingScreen = (props) => {

    let handleStartApp = () => {
        let container = document.querySelector('.landing-screen-container')
        let startButton = document.querySelector('.landing-screen-button')
        startButton.style.transform = "translate(-50%, -50%) scale(0.7)"
        startButton.classList.remove('landing-screen-button-hover')
        container.style.animation = "0.5s screenSlideUp 0.3s linear forwards"
        setTimeout(() => props.toggleStartState(), 700)
    }
    return(
        <div className="landing-screen-container">
            <div className="landing-screen-bg"></div> 
            <button className="landing-screen-button landing-screen-button-hover" onClick={handleStartApp}>Cookerino</button>
            
        </div>
    )
}

export default LandingScreen