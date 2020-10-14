import React from 'react';

const Input = props => {
    return (
        <>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
            />
        </>
    );

}

export default Input;