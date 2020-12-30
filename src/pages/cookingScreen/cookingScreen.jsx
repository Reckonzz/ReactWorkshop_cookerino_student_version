import React, { useState,useEffect } from "react"
import axios from 'axios';

import "./cookingScreen.styles.css"

import bread from "../../images/ingredients/bread.png"
import prawn from "../../images/ingredients/prawn.png"
import lettuce from "../../images/ingredients/lettuce.png"

import loaf from "../../images/recipes/loaf_of_bread.jpg"
import cabbage from "../../images/recipes/cabbage.jpg"
import hugePrawn from "../../images/recipes/seriously_huge_prawn.jpg"
import cerealPrawn from "../../images/recipes/cereal_prawn.jpg"
import breadedPrawn from "../../images/recipes/breaded_prawn.jpg"
import ebiBurger from "../../images/recipes/ebi_burger.jpg"
import doubleEbiBurger from "../../images/recipes/double_ebi_burger.png"
import prawnPizza from "../../images/recipes/prawn_pizza.jpg"
import seaweedBread from "../../images/recipes/seaweed_bread.jpg"
import thaiPrawnSalad from "../../images/recipes/thai_prawn_salad.jpg"
import vietnameseSpringRolls from "../../images/recipes/vietnamese_spring_rolls.jpg"
import prawnAndPapayaSalad from "../../images/recipes/prawn_and_papaya_salad.jpg"
import shrimpSaladRolls from "../../images/recipes/shrimp_salad_rolls.jpg"
import vegetableWrap from "../../images/recipes/vegetable_wrap.jpg"
import wholemealBread from "../../images/recipes/wholemeal_bread.jpg"

// import InstructionPage from "../instructionPage/instructionPage"
import Navbar from "../../components/navBar/navBar.jsx"

import IngredientsSection from "../../components/ingredientsSection/ingredientsSection"
import HungerMeter from "../../components/hungerMeter/hungerMeter"
import Stove from "../../components/stove/stove"

const CookingScreen = () => {
    let recipes = {
        "bread,bread,bread,bread": loaf,
        "lettuce,lettuce,lettuce,lettuce": cabbage,
        "prawn,prawn,prawn,prawn": hugePrawn,
        "bread,prawn,prawn,prawn": cerealPrawn,
        "bread,bread,prawn,prawn": breadedPrawn,
        "bread,bread,lettuce,prawn": ebiBurger,
        "bread,lettuce,prawn,prawn": doubleEbiBurger,
        "bread,bread,bread,prawn": prawnPizza,
        "bread,lettuce,lettuce,lettuce": vegetableWrap,
        "lettuce,lettuce,lettuce,prawn": thaiPrawnSalad,
        "lettuce,lettuce,prawn,prawn": vietnameseSpringRolls,
        "lettuce,prawn,prawn,prawn": prawnAndPapayaSalad,
        "bread,lettuce,lettuce,prawn": shrimpSaladRolls,
        "bread,bread,lettuce,lettuce": seaweedBread,
        "bread,bread,bread,lettuce": wholemealBread,
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
        let ingredientsNamesArr = ingredientsBoxes.map(el => el.name ? el.name: "0")
        ingredientsNamesArr.sort()
        let key = ingredientsNamesArr.join(',')
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
