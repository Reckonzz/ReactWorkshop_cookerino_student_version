import React from "react"
import Spritesheet from 'react-responsive-spritesheet';

import "./dancingRobotScreen.styles.css"

import logo from "../../images/3DC_logo.png"
import fire_logo from "../../images/fire_sprite.png"

const DancingRobotScreen = (props) => {
    const fires = Array(11).fill(0)

    let goToCookingScreen = () => {
        let robotScreen = document.querySelector('.dancing-robot-container')
        robotScreen.style.opacity = "0%";
    }
    return(
        <div className="dancing-robot-container">
            <img className="logo-3dc" src={logo} alt="3dc logo"></img>
            <div className="dancing-robot">
                <Spritesheet
                    image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
                    widthFrame={420}
                    heightFrame={500}
                    steps={14}
                    fps={10}
                    autoplay={true}
                    loop={true}
                />
            </div>
            <div className="dr-screen-desc">Welcome to our React workshop hosted by 3DC! Are you ready?</div>
            {props.showStartButton ? 
                <button onClick={goToCookingScreen} className="start-button">
                    <span>I was born ready</span>
                    <div className="fire-container">
                    {fires.map(_ => <Spritesheet
                        className="fire-logo"
                        image={fire_logo}
                        widthFrame={64}
                        heightFrame={128}
                        steps={32}
                        fps={10}
                        autoplay={true}
                        loop={true}
                    />
                    )}
                    </div>
                </button>: ''
            }
        </div>
    )
}

export default DancingRobotScreen