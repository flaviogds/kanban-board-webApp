import React from 'react';
import './Input.css'

const Input = props => {

    const handleChange = event => props.onInput(event.target.value);

    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <input
                type={props.type} 
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handleChange}
                required={props.required}
                min={props.min}
                max={props.max}
                step={props.step}
            />
        </div>
    );

}

export default Input;