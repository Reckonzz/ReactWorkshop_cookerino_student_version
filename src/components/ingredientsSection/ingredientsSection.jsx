import React from "react"

import "./ingredientsSection.styles.css"

import Ingredient from "./ingredients/ingredients"

const IngredientsSection = (props) => {
    return (
        <div className="section ingredients-container"> 
            {props.ingredients.map((ingInfo, idx) => <Ingredient key={idx} addIngredient={props.addIngredient} ingInfo={ingInfo}/>)}
        </div>
    )
}

export default IngredientsSection