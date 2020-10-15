import React from 'react';
import './Input.css'

const Input = props => {
    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <input
                type={props.type} 
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                min={props.min}
                max={props.max}
                step={props.step}
            />
        </div>
    );

}

export default Input;