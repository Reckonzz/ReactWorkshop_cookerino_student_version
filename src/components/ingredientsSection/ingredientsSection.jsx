import React from "react"

import "./ingredientsSection.styles.css"

import Ingredient from "./ingredients/ingredients"

const IngredientsSection = (props) => {
    return (
        <div className="section ingredients-container"> 
            {props.ingredients.map((el) => <Ingredient addIngredient={props.addIngredient} imgSrc={el.imgSrc}/>)}
        </div>
    )
}

export default IngredientsSection