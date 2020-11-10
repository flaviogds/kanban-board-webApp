import React, { Component }from 'react';
import { Container, Title } from './styles'

export default class Header extends Component {
    render(){
        return (
            <Container>
                <Title>{this.props.logo}</Title>
                {this.props.children}
            </Container>
        );
    }
}
