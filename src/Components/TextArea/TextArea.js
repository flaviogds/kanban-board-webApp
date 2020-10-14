import React from 'react';
import './TextArea'

const TextArea = props => {
    return (
        <>
            <label>{props.label}</label>
            <textarea
                style={props.style}
                rows={props.size.rows}
                cols={props.size.cols}
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            ></textarea>
        </>
    );

}

export default TextArea;