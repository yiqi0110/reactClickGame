import React from 'react';
import Button from "./button";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function ShuffledBtn(props) {
  console.log(props.array);
  const tempImageArr = props.array.map((imageURL, index) => 
        <div key={index} className="col-3">
            <Button handleWinLose={this.handleWinLose} imageURL={imageURL} index={index} handleIncrement={this.handleIncrement} />
        </div>
      );
  const renderedArr = shuffleArray(tempImageArr);
  return (
    <div className="row">
      {renderedArr}
    </div>
  );
}

export default ShuffledBtn;