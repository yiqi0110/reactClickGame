import React from "react";
import Button from "./button";
import Modal from "./modal";
import "../assets/styles/image.css";

// This array will carry all the image srcs.
const imageArr = [
  {id: 0, imageURL: "./images/crow.jpg", clicked: false},
  {id: 1, imageURL: "./images/fox.png", clicked: false},
  {id: 2, imageURL: "./images/futaba.png", clicked: false},
  {id: 3, imageURL: "./images/sui.png", clicked: false},
  {id: 4, imageURL: "./images/hifumi.png", clicked: false},
  {id: 5, imageURL: "./images/noir.png", clicked: false},
  {id: 6, imageURL: "./images/wakaranai.png", clicked: false},
  {id: 7, imageURL: "./images/ore.png", clicked: false},
  {id: 8, imageURL: "./images/pather.png", clicked: false},
  {id: 9, imageURL: "./images/queen.png", clicked: false},
  {id: 10, imageURL: "./images/sae.png", clicked: false},
  {id: 11, imageURL: "./images/skull.png", clicked: false},
];

class Image extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    display: "none",
    array: imageArr,
    modal: ""
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
  // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.shuffle(this.state.array);
  
    if (this.state.count >= 11){
      console.log(this.state.array);
      this.handleWinLose();
    }
  };

  handleCloseOfModal = () => {
    this.setState({display: "none",count: 0});
    imageArr.map((setToFalse) => setToFalse.clicked = false);
    console.log(this.state.array);
  };

  handleClicked = (e) => {
    console.log(e.target.src);
    // Grabs the array from state.
    let newArr = this.state.array;
    // Inverses the state array's clicked value, false to true and vise versa.
    newArr[e.target.id].clicked = !newArr[e.target.id].clicked;
    // Get state (true or false).
    let clickedImage = newArr[e.target.id].clicked;
    // If clickedImage is true, increment score and check for win/ lose conditions.
    // If clickedImage is false, do not increment and handle win/ lose conditions.
    if (clickedImage) {
      this.handleIncrement();
      this.handleWinLose("win");
    } else if (!clickedImage) {
      this.handleWinLose("lose");
    }

    // Sets the new state of array to the new clicked state and shuffled order.
    this.setState({
      array: newArr
    });
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }


  handleWinLose = (winOrLose) => {
    if (winOrLose === "win") {
      this.setState({modal: `Congrats! You Won! Your Score is ${this.state.count}`});
    } else if (winOrLose === "lose") {
      this.setState({display: "block", modal: `Oh Too Bad! Better Luck Next Time. Your Score Is ${this.state.count}`});
    }
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
        <div className="notContainer">
            <Modal display={this.state.display} closeButon={this.handleCloseOfModal} winOrLose={this.state.modal}/>
          <div className="card text-center">
            <div className="card-header text-white">
              <p className="card-text">Click Count: {this.state.count}</p>
            </div>
            <div className="card-body">
              <div className="row">
              {imageArr.map((image, index) => 
                  <Button clickedState={image.clicked} imageURL={image.imageURL} index={index} handleClick={this.handleClicked} />
              )}
              </div>
            </div>
          </div>
        </div>
      );
  }
}
  
  export default Image;
  
  
  // Fun fact: this allows you to use .range() from python kind of
  // let arr = [...Array(12).keys("test")];
  
  
  // Allows you to get elements in the DOM.
  // const doc = (className) => {
  //     return document.getElementsByClassName(className);
  //   };
  