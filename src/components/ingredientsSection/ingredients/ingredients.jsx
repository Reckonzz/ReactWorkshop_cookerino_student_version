import React from "react"

import "./ingredients.styles.css"

const Ingredient = (props) => {
    return (
        <div className="ingredient">
            <img src={props.ingInfo.imgSrc} onClick={() => props.addIngredient(props.ingInfo)}/>
        </div>
    )
}

export default Ingredient


