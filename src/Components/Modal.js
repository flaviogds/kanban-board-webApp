import React, {useState} from 'react';
import './Modal.css'


function Modal(props){

    const [dropDown, setDropDown] = useState('');

    const {className, modalRef} = props
    return (
        <div ref={modalRef} className={`${className} modal`}>
            teste
        </div>
    );
}

export default Modal;