import React, { useState,useEffect } from "react"
import axios from 'axios';

import "./cookingScreen.styles.css"

import bread from "../../images/ingredients/bread.png"
import prawn from "../../images/ingredients/prawn.png"
import lettuce from "../../images/ingredients/lettuce.png"

import loaf from "../../images/recipes/loaf_of_bread.jpg"
import cabbage from "../../images/recipes/cabbage.jpg"

// import InstructionPage from "../instructionPage/instructionPage"
import Navbar from "../../components/navBar/navBar.jsx"

import IngredientsSection from "../../components/ingredientsSection/ingredientsSection"
import HungerMeter from "../../components/hungerMeter/hungerMeter"
import Stove from "../../components/stove/stove"

const CookingScreen = () => {
    let recipes = {
        "bread,bread,bread,bread": loaf,
        "lettuce,lettuce,lettuce,lettuce": cabbage,
    }
    const ingredients = [{"name":"bread", "imgSrc": bread}, {"name": "prawn","imgSrc": prawn}, {"name": "lettuce", "imgSrc": lettuce}]    
    const [ingredientsBoxes, setIngredientBoxes] = useState(Array(4).fill(0))
    const [delicacySrc, setDelicacySrc] = useState(false)
    const [hunger, setHunger] = useState(0)

    // useEffect(()=>{
    //     axios.get("url").then(response => {
    //         console.log(response.data)
    //     })
    // },[])
 
    let addIngredient = (ingredient) => {
        let emptyStoveIndex = ingredientsBoxes.indexOf(0)
        if (emptyStoveIndex !== -1){
            let newIngredients = ingredientsBoxes.slice()
            newIngredients[emptyStoveIndex] = ingredient
            setIngredientBoxes(newIngredients)
        }   
    }

    let removeIngredient = (idx) => {
        let newIngredients = ingredientsBoxes.slice()
        newIngredients[idx] = 0
        setIngredientBoxes(newIngredients)
    }

    let cook = () => {
        let ingredientsNamesArr = ingredientsBoxes.map(el => el.name)
        let key = ingredientsNamesArr.join(',')
        console.log(key)
        setDelicacySrc(recipes[key])
        setIngredientBoxes([0,0,0,0])
    }

    let eatDelicacy = () => {
        if (delicacySrc){
        setHunger(prevHunger => {
            if (prevHunger >= 66){
                return 100
            }
            return prevHunger + 33
        })
        }
        setDelicacySrc(false)
    }

    return(
        <div>
            <Navbar/>
            <div className="main-body">
                <IngredientsSection addIngredient={addIngredient} ingredients={ingredients}/>
                <Stove eatDelicacy={eatDelicacy} imgSrc={delicacySrc} removeIngredient={removeIngredient} cook={cook} ingredientsBoxes={ingredientsBoxes}/>
                <HungerMeter hunger={hunger}/>
            </div>
        </div> 
    )
}

export default CookingScreen
