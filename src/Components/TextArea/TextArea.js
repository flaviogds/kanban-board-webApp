import React from 'react';
import './TextArea'

const TextArea = props => {

    const handleChange = event => props.onInput(event.target.value);

    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <textarea
                style={props.style}
                rows={props.size.rows}
                cols={props.size.cols}
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={handleChange}
                required={props.required}
            ></textarea>
        </div>
    );

}

export default TextArea;