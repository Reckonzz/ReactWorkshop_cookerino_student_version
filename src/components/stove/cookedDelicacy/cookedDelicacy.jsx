import React from "react"

import "./cookedDelicacy.styles.css"

const CookedDelicacy = (props) => {
    return (
        <div onClick={props.eatDelicacy} className="cooked-delicacy">
            {props.imgSrc ? <img src={props.imgSrc}/> : ""}
        </div>
    )
}

export default CookedDelicacy