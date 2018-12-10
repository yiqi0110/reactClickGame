import React from "react";
import "../assets/styles/jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to my clicking game!</h1>
                <p className="lead">In order to win, you must click every image once and only once. Once you click the same button twice, your score will be reset and you'll have to restart. Good luck!</p>
            </div>
        </div>
    );
  }
  
  export default Jumbotron;