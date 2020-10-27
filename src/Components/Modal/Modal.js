import React, { Component } from 'react';
import close from '../default/close.svg';
import './Modal.css'

export default class Modal extends Component {
    render(){
        return (
            <>
                {this.props.show ? <div onClick={this.props.handleDrop} className="modal-drop"></div> : null}
                <div
                    className="modal"
                    style={{
                        background: this.props.style ? this.props.style : null,
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        display: this.props.show ? 'block' : 'none',
                        opacity: this.props.show ? '1' : '0'
                }}>
                    <div
                        style={{background: this.props.style}}
                        className="modal-header"
                    >
                        <p>{this.props.name}</p>
                        <img src={close} onClick={this.props.handleDrop} alt="close" className="close-modal-btn"/>
                    </div>
                    <div className="modal-content">
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}