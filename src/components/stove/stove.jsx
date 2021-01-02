import React from "react"

import "./stove.styles.css"
import stoveImg from "../../images/stove.png"

// import CookedDelicacy from "./cookedDelicacy/cookedDelicacy"
// import IngredientBox from  "./ingredientBox/ingredientBox"

const Stove = (props) => {
    return (
        <div className='section stove'>
            <div>
                <img className="stove-img" src={stoveImg} alt='stove'/>
            </div>
        </div> 
    )
}

export default Stove 



