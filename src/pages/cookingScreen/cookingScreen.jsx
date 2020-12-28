import React from "react"

import "./cookingScreen.styles.css"

// import InstructionPage from "../instructionPage/instructionPage"
import stoveImg from "../../images/stove.png"

const CookingScreen = () => {
    const ingredients = Array(4).fill(0)
    return(
        <div>
            <div className="nav-bar">
                <div className="brand-name">Cookerino</div> 
            </div>
            <div className="main-body">
                <div className='section ingredients-container'>
                    ingredients 
                    {ingredients.map(() => <div className="ingredient"></div>)}
                </div>
                <div className='section stove'>
                    <div className="cooked-delicacy"></div>
                    <div className="ingredients-boxes-container">
                        {ingredients.map(() => <div className="ingredient-box"></div>)}
                    </div>
                    <img className="stove-img" src={stoveImg} alt='stove'/>
                    <button className="cook-btn">cook</button>
                </div> 
                <div className="section hunger-meter-container">
                    hunger meter
                    <div className="hunger-meter"></div> 
                </div>
            </div>
        </div> 
    )
}

export default CookingScreen
