import React, { useState, } from "react"

import "./cookingScreen.styles.css"

import bread from "../../images/ingredients/bread.png"
import prawn from "../../images/ingredients/prawn.png"
import lettuce from "../../images/ingredients/lettuce.png"
import stoveImg from "../../images/stove.png"

// import InstructionPage from "../instructionPage/instructionPage"
import Navbar from "../../components/navBar/navBar.jsx"

import IngredientsSection from "../../components/ingredientsSection/ingredientsSection"

const CookingScreen = () => {
    const ingredients = [{"name":"bread", "imgSrc": bread}, {"name": "prawn","imgSrc": prawn}, {"name": "lettuce", "imgSrc": lettuce}]    
    const [ingredientsBoxes, setIngredientBoxes] = useState(Array(4).fill(0))

    let addIngredient = (ingredientImgSrc) => {
        // ingredientsBoxes.indexOf(0)
    }

    return(
        <div>
            <Navbar/>
            <div className="main-body">
                <IngredientsSection addIngredient={addIngredient} ingredients={ingredients}/>
                <div className='section stove'>
                    <div className="cooked-delicacy"></div>
                    <div>
                        <div className="ingredients-boxes-container">
                            {ingredientsBoxes.map((el,idx) => <div key={idx} className="ingredient-box"></div>)}
                        </div>
                        <img className="stove-img" src={stoveImg} alt='stove'/>
                    </div>
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
