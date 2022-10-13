import React from "react";

function FixedComponent(props) {
    console.log(props)

    return (
        <div>

            <p>Hello</p>
            <p>Fixed Component</p>
            <p> {props.favNum}</p>
            <p>{props.favNum +1}</p>
            <p>{props.favNum +2}</p>
        </div>
    )
    
}
FixedComponent.defuaultProps = {
    favNum: 42
};




export default FixedComponent;