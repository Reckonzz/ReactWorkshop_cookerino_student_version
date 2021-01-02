import React, { useState } from "react"

import "./instructionPage.styles.css"

let addingBackgroundImg = "./images/helper_images/adding_background_img.png"
let reactComponent = "./images/helper_images/react_component.png"
let appPlan = "./images/helper_images/app_plan.png"
let navItemComponent = "./images/helper_images/navItemComponent.png"
let navItemProps = "./images/helper_images/navItemProps.png"
let getRequest = "./images/helper_images/getRequest.png"
let useStateExplanation = "./images/helper_images/useStateExplanation.png"
let ingredientComponent = "./images/helper_images/ingredientComponent.png"
let ingredientSection = "./images/helper_images/ingredientSection.png"
let ingredientBox = "./images/helper_images/ingredientBox.png"
let addIngredientFunction = "./images/helper_images/addIngredientFunction.png"
let addingClickHandler = "./images/helper_images/addingClickHandler.png"
let conditionalRendering = "./images/helper_images/conditionalRendering.png"
let removeIngredients = "./images/helper_images/removeIngredients.png"
let cookButton = "./images/helper_images/cookButton.png"
let cookedDelicacy = "./images/helper_images/cookedDelicacy.png"
let delicacySrc = "./images/helper_images/delicacySrc.png"
let cookFunction = "./images/helper_images/cookFunction.png"
let congratsBg = "./images/helper_images/congratsBg.jpg"

const InstructionPage = () => {
    const [instructionNumber, setInstructionNumber] = useState(0)
    const [isMinimized, setMinimize] = useState(false)

    let instructions = [ 
        { 
            msg: "Welcome to your React tutorial, I will guide you through step by step, \n click Next to go to the next instruction and Back to go to the previous instruction. Both buttons can be found at the bottom right of your screen",
            extra_div: "",
        },
        {
            msg: "Click the minimize button at the top right corner of your screen to close and open the instruction page",
            extra_div: "",
        },
        {
            msg: "Lesson 1: Adding css styles by adding classnames",
            extra_div: <div className="detailed-info">
                <div className="detailed-info-text"> 
                    Currently our background is pretty plain, lets add some nice background gradient.
                </div>
                <img src={addingBackgroundImg}/>
            </div>
        },
        {
            msg: "Lesson 2: What is a React component",
            extra_div: <div className="detailed-info">
                <div className="detailed-info-text"> 
                    This is a set up which you can use when creating any new React component
                </div>
                <div className="imageContainer">
                    <img src={reactComponent}/>
                </div>
            </div>
        },
        {
            msg: "Lesson 3: Planning our app",
            extra_div: <div className="detailed-info">
                <div className="detailed-info-text"> 
                    Lets see how we can break down our application into components and subcomponents, the blue arrows are those components that we will be implementing
                </div>
                <div className="imageContainer">
                    <img src={appPlan}/>
                </div>           
            </div>
        },
        {
            msg: "Lesson 4: Creating a navigational bar!",
            extra_div: <div className="detailed-info">
                <div className="detailed-info-text"> 
                    What's an app without a navigation bar? lets build a navigation bar! First we create the navItem component in our navigational bar               </div>
                <div className="imageContainer">
                    <img src={navItemComponent}/>
                </div>
            </div>
        },
        {
            msg: "Lesson 5: Creating a navigational bar! Rendering components using arrays with props",
            extra_div: <div className="detailed-info">
                <div className="detailed-info-text"> 
                    Rather than creating each navigational item one by one, lets create it one shot using an array
                </div>
                <div className="imageContainer">
                    <img src={navItemProps}/>
                </div>
            </div>
        },
        {
            msg: "Lesson 6: Lets get cooking!",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                    To start cooking we need our ingredients, but they are only available in an online database, lets go get them
               </div>
            </div> 
        },
        {
            msg: "Lesson 6: Lets get cooking! Making a http request",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               </div>
               <div className="imageContainer">
                   <img src={getRequest}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 7: Controlling state with useState hook",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               Hold up what is state??
               </div>
               <div className="imageContainer">
                   <img src={useStateExplanation}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 8: Revision, creating our components from array",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               Remember how we created our nav bar? Now that we have a list of ingredients, we will apply the same concept to generate our images.
               </div>
               <div className="imageContainer">
                   <img src={ingredientComponent}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 8: Continued, creating our components from array",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               Lets finally finish up the ingredients section by translating our array of ingredients to the Ingredient component we just designed
               </div>
               <div className="imageContainer">
                   <img src={ingredientSection}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 8: Revision, creating our components from array",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               Remember how we created our nav bar? Now that we have a list of ingredients, we will apply the same concept to generate our images.
               </div>
               <div className="imageContainer">
                   <img src={useStateExplanation}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 9: Second Revision, creating our components from array",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
               Let's practise one more time, lets create boxes above our stove to hold our ingredients  
               </div>
               <div className="imageContainer">
                   <img src={ingredientBox}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 10: adding Events: clicks",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   What is a website without user interaction? Here we learn how to respond to clicks  
               </div>
               <div className="imageContainer">
                   <img src={addIngredientFunction}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 10: adding Events: attaching click handlers to component",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   now that we created a function that we want to execute when the ingredient is clicked, we have to attach the click listener to our ingredient 
               </div>
               <div className="imageContainer">
                   <img src={addingClickHandler}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 11: Conditional rendering",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   We only want to display the ingredient on the stove when the ingredient has been clicked by the user, as such we only want to display certain components when certain conditions are met  
               </div>
               <div className="imageContainer">
                   <img src={conditionalRendering}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 12: Revision: updating state and removing Ingredients ",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   Great! now we have learnt to add ingredients, but what happens when we want to remove them? 
               </div>
               <div className="imageContainer">
                   <img src={removeIngredients}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 13: Hope I've cooked up a good tutorial so far, time to tie it all together",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   Congrats on coming thus far, you have really learnt alot, now I will be revising all our concepts in one final component, 
                   but here's an empty slide to take a break :) 
               </div>
            </div> 
        },
        {
            msg: "Lesson 14: Revision, linking css classes with html elements",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   lets add a button to cook our food 
               </div>
               <div className="imageContainer">
                   <img src={cookButton}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 14 (Revision):, linking css classes with html elements",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   lets add a button to cook our food 
               </div>
               <div className="imageContainer">
                   <img src={cookButton}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 15(Revision): creating a new component",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   We will create a box to hold our cooked delicacy 
               </div>
               <div className="imageContainer">
                   <img src={cookedDelicacy}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 16(Revision): useState and reactive components",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   We want to render the image of our delicacy when we cook our food but yet
                   we want to show an empty box if no food is cooked, hence we can create a state variable to control this 
               </div>
               <div className="imageContainer">
                   <img src={delicacySrc}/>
               </div>
            </div> 
        },
        {
            msg: "Lesson 17(Revision): making a http request and adding click handlers",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   when we press cook, we want to go to our database, "get" the recipe and cook our food 
               </div>
               <div className="imageContainer">
                   <img src={cookFunction}/>
               </div>
            </div> 
        },
        {
            msg: "CONGRATULATIONS",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   You have made it!! You have learnt a great deal about React today and are one step closer
                   to create really awesome applications
               </div>
               <div className="imageContainer endpic">
                   <img src={congratsBg}/>
               </div>
            </div> 
        },
        {
            msg: "BONUS: Hunger meter",
            extra_div: <div className="detailed-info">
               <div className="detailed-info-text"> 
                   Let's go through how to make the hunger meter work by playing with some css properties 
               </div>
            </div> 
        },
    ]

    const nextInstruction = () => {
        setInstructionNumber(prevNum => Math.min(instructions.length-1,prevNum + 1))
    }

    const prevInstruction = () => {
        setInstructionNumber(prevNum => Math.max(0,prevNum - 1))
    }

    const toggleMinimize = () => {
        setMinimize(prevState => !prevState)
    }

    return (
        <div className="instructionPage">
            <div className={`${isMinimized ? "minimized": ""} instructions`}>
                {instructions.map((el, idx)=>{
                    return(
                        <div key={idx}>
                            {instructionNumber === idx ? <div className="instruction-item"> {el.msg} </div> : ''}
                            {instructionNumber === idx ? el.extra_div: ''}
                        </div>
                    )    
                })}
                <button onClick={nextInstruction} className="instruction-btn next-btn">Next</button> 
                <button onClick={prevInstruction} className="instruction-btn back-btn">Back</button> 
            </div>
            <button className="minimize-btn" onClick={toggleMinimize} >{isMinimized ? "+" : "-"}</button> 
        </div>
    )
}

export default InstructionPage