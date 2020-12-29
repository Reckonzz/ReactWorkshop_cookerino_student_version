import React from "react"

import "./ingredients.styles.css"

const Ingredient = (props) => {
    return (
        <div className="ingredient">
            <img src={props.imgSrc} onClick={() => props.addIngredient(props.imgSrc)}/>
        </div>
    )
}

export default Ingredient


