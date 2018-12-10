import React from "react";
import Image from "./image";
import "../assets/styles/jumbotron.css";

function MainJumbo() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <Image />
            </div>
        </div>
    );
  }

  export default MainJumbo;