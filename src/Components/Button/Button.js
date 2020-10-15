import React from 'react';

function Button(props){
    return (
        <button
            className={props.name} 
            onClick={props.onAction}
            type={props.type}
        >
            {props.value}
        </button>
    );
}

export default Button;