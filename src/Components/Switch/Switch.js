import React, { Component } from 'react';
import { SwitchStyle} from './styled'

export default class Switch extends Component{
    render(){
        return(
            <SwitchStyle>
                <label>
                    <input type="checkbox" onChange={this.props.onAction}/>
                    <span></span>
                </label>
            </SwitchStyle>
        );
    }
}