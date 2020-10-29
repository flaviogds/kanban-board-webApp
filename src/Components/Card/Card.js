import React, { useEffect } from 'react';

import { Container, Header, CardBody, CardTitle, CardDescription } from './styles.js';

export default function Card ( { card, onAction, children} ){
    return (
        <Container key={card.id} color={card.properties.color}>
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
        </Container>
    );
}