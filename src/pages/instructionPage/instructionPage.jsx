import React, { useState } from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

import "./instructionPage.styles.css"

let addingBackgroundImg = "./images/helper_images/adding_background_img.png"
let reactComponent = "./images/helper_images/react_component.png"
let appPlan = "./images/helper_images/app_plan.png"
let navItemComponent = "./images/helper_images/navItemComponent.png"
let navItemProps = "./images/helper_images/navItemProps.png"
let getRequest = "./images/helper_images/getRequest.png"
let useStateExplanation = "./images/helper_images/useStateExplanation.png"

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
                   <img src={useStateExplanation}/>
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
                        <div>
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