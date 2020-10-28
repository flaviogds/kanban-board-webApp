import React, { Component } from 'react';

import { Container, Header, CardBody, CardTitle, CardDescription } from './styles.js';

export default class Card extends Component{
    render(){
        return (
            <Container key={this.props.card.id} color={this.props.card.properties.color}>
                <Header>
                    <CardTitle>
                        {this.props.card.priority}
                    </CardTitle>
                    {this.props.children}
                </Header>
                <CardBody onClick={this.props.onAction.bind(this, this.props)}>
                    <CardDescription>
                        {this.props.card.description.slice(0,150)+'... '}
                    </CardDescription>
                </CardBody>
            </Container>
        );
    }
}