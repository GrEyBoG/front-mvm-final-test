import React from "react";

//Style




function Description(props) {

    const descriptionValue = props.descriptionValue;
    const settledValue = props.settledValue;

    console.log(descriptionValue);
    console.log(settledValue);

    return (
        <div className="description-container">
            <div className="description-title">
                <h1 className ='title-text'>Description</h1>
                <p className ='title-text'>{settledValue}</p>
            </div>
            <div className="description-text">
                <p>{descriptionValue}</p>
            </div>
        </div>
    )
}


export {Description};