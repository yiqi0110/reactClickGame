import React from "react";
import "../assets/styles/modal.css";

function Modal(props) {

  console.log(props.winOrLose);

  // return <h4>Oh Too Bad! Better Luck Next Time.</h4>;
  // return <h4>Congrats! You Won!</h4>;

    return(
        // <!-- Modal -->
        <div className="modal" role="dialog" style={{display: props.display}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeButon}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* {props.winOrLose} */}
                <h2>{props.winOrLose}</h2>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeButon}>Retry</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal;