import React from "react";
  

function Button(props) {
        return(
            <div key={props.index} className="col-3">
                <button id={"imageItem"+props.index} className="btn imageBtn">
                    <img id={props.index} data-state={props.clickedState} key={"imageItem"+props.index} onClick={props.handleClick} className="gameImg" src={props.imageURL} alt={props.index}></img>
                </button>
            </div>
        )
}

export default Button;