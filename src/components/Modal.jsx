import React from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');


export class Modal extends React.Component {
  render(){
    const Modal = (<div className="modal">This is how portal works
    <button onClick={this.props.onClick}>Ok!</button>
    </div>);
    return (this.props.isVisible && 
        ReactDOM.createPortal(
            Modal,
            modalRoot,
        ));
  }
}