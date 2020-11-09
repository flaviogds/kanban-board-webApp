import React from 'react';
import { Dropdown, Item } from './styles'

export default function DropDownMenu ( { style, children } ) {

    function DropdownItem( {custom, children} ){
        return(
            <Item custom={{...custom}}>
                {children.props.icon ? <span>{children.props.icon}</span> : null}
                {children}
            </Item>
        );
    }

    return (
        <Dropdown custom={{...style}}>
            {children.type
                ? <DropdownItem custom={{...style}} key={'newTableMount'}>{children}</DropdownItem>
                : children.map((item, index) => <DropdownItem custom={{...style}} key={index}>{item}</DropdownItem>)
            }
        </Dropdown>
    );
}