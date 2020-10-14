import React from 'react';

const Forms = props => {
    return (
        <form
            className={props.className}
            method={props.method}
            onSubmit={props.onSubmit}
        >
        <h4>{props.name}</h4>
        {props.children}
      </form>
    );
}

export default Forms;