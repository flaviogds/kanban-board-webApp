import React from 'react';

import { Container, Header, CardBody, CardTitle, CardDescription, Checked } from './styles.js';

export default function Card ( { card, onAction, children} ){
    return (
        <Container key={card.id} color={card.properties.color} concluded={card.properties.concluded}>
            <Header>
                <CardTitle>
                    {card.priority}
                </CardTitle>
                {children}
            </Header>
            <CardBody onClick={onAction.bind(this, {...card, children: children})}>
                <CardDescription>
                    {card.description.slice(0,150) + ' ...'}
                </CardDescription>
            </CardBody>
            {card.properties.concluded ? <Checked size={50}/> : null}
        </Container>
    );
}