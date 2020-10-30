import React, { Component } from 'react';
import { SwitchStyle} from './styles'

export default class Switch extends Component{
    render(){
        return(
            <SwitchStyle>
                <input type="checkbox" onChange={this.props.onAction}/>
                <span/>
            </SwitchStyle>
        );
    }
}