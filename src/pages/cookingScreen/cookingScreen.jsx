import React, { useState,useEffect } from "react"
import axios from 'axios';

import "./cookingScreen.styles.css"

import Navbar from "../../components/navBar/navBar.jsx"

import IngredientsSection from "../../components/ingredientsSection/ingredientsSection"
import HungerMeter from "../../components/hungerMeter/hungerMeter"
import Stove from "../../components/stove/stove"

const CookingScreen = () => {

    const [ingredients, setIngredients] = useState([]) 
    const [ingredientsBoxes, setIngredientBoxes] = useState(Array(4).fill(0))
    const [delicacySrc, setDelicacySrc] = useState(false)
    const [hunger, setHunger] = useState(0)
    
    useEffect(()=>{
        axios.get("https://cookerinoapi.herokuapp.com/ingredients").then(response => {
            setIngredients(response.data)
        }).catch(error => console.log(error))
    },[])
 
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
        
        axios.get(`https://cookerinoapi.herokuapp.com/recipes?ingUsed=${key}`).then(response => {
            setDelicacySrc(response.data)
            setIngredientBoxes([0,0,0,0])
        }).catch(error => console.log(error))
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
                <Stove eatDelicacy={eatDelicacy} cook={cook} delicacySrc={delicacySrc} removeIngredient={removeIngredient} ingredientsBoxes={ingredientsBoxes}/>
                <HungerMeter hunger={hunger}/>
            </div>
        </div> 
    )
}

export default CookingScreen


// const CookingScreen = () => {

//     const [ingredients, setIngredients] = useState([]) 
//     const [ingredientsBoxes, setIngredientBoxes] = useState(Array(4).fill(0))
//     const [delicacySrc, setDelicacySrc] = useState(false)
//     const [hunger, setHunger] = useState(0)

//     useEffect(()=>{
//         axios.get("https://cookerinoapi.herokuapp.com/ingredients").then(response => {
//             console.log(response.data)
//             setIngredients(response.data)
//         }).catch(error => console.log(error))
//     },[])
 
//     let addIngredient = (ingredient) => {
//         let emptyStoveIndex = ingredientsBoxes.indexOf(0)
//         if (emptyStoveIndex !== -1){
//             let newIngredients = ingredientsBoxes.slice()
//             newIngredients[emptyStoveIndex] = ingredient
//             setIngredientBoxes(newIngredients)
//         }   
//     }

//     let removeIngredient = (idx) => {
//         let newIngredients = ingredientsBoxes.slice()
//         newIngredients[idx] = 0
//         setIngredientBoxes(newIngredients)
//     }

//     let cook = () => {        
//         let ingredientsNamesArr = ingredientsBoxes.map(el => el.name ? el.name: "0")
//         ingredientsNamesArr.sort()
//         let key = ingredientsNamesArr.join(',')
        
//         axios.get(`https://cookerinoapi.herokuapp.com/recipes?ingUsed=${key}`).then(response => {
//             setDelicacySrc(response.data)
//             setIngredientBoxes([0,0,0,0])
//         }).catch(error => console.log(error))
//     }

//     let eatDelicacy = () => {
//         if (delicacySrc){
//         setHunger(prevHunger => {
//             if (prevHunger >= 66){
//                 return 100
//             }
//             return prevHunger + 33
//         })
//         }
//         setDelicacySrc(false)
//     }

//     return(
//         <div>
//             <Navbar/>
//             <div className="main-body">
//                 <IngredientsSection addIngredient={addIngredient} ingredients={ingredients}/>
//                 <Stove eatDelicacy={eatDelicacy} imgSrc={delicacySrc} removeIngredient={removeIngredient} cook={cook} ingredientsBoxes={ingredientsBoxes}/>
//                 <HungerMeter hunger={hunger}/>
//             </div>
//         </div> 
//     )
// }

// export default CookingScreen
