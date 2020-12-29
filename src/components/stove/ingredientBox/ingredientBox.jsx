import React, {useEffect} from "react"

import "./ingredientBox.styles.css"

const IngredientBox = (props) => {
    useEffect(()=>{
        console.log(props.ingredient)
    },[])
    return(
        <div onClick={() => props.removeIngredient(props.idx)} className="ingredient-box">
            {props.ingredient ? <img src={props.ingredient.imgSrc}/>: ""}
        </div> 
    )
}

export default IngredientBox
