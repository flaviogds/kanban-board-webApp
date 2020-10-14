import React from 'react';
import './Modal.css'


const Modal = props => {
    return (
        <>
            {props.show ? <div onClick={props.handleDrop} className="modal-drop"></div> : null} 
            <div
                className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'


            }}>
                <div className="modal-header">
                    <p>{props.name}</p>
                    <span onClick={props.handleDrop} className="close-modal-btn">x</span>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;