import React, { useState, useEffect } from "react"

import "./instructionPage.styles.css"

const InstructionPage = () => {
    const [instructionNumber, setInstructionNumber] = useState(0)

    let instructions = [ 
        { 
            msg: "Welcome to your React tutorial, I will guide you through step by step, click to go next",
            extra_div: <div>extra div working</div> ,
        },
        {
            msg: "Next message",
            extra_div: <div>second extra div working</div>
        }
    ]


    useEffect(()=>{
        window.addEventListener("click", () => {
            setInstructionNumber(prevNum => prevNum + 1)
        })
    }, [])

    return (
        instructions.map((el, idx)=>{
            return(
                <div>
                    {instructionNumber >= idx ? <div> {el.msg} </div> : ''}
                    {instructionNumber === idx ? el.extra_div: ''}
                </div>
            )    
        })
    )
}

export default InstructionPage