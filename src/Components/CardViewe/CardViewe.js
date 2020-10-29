import React from 'react';

import { Header, HeaderCard, Modal, Smooth, Title, Card, VieweControl, Date, Priority, Description, Close, HeaderDate } from './styles'

export default function CardViewe ({show, handleDrop}){  
    return (
    <>
        {show.viewe ? <Smooth onClick={handleDrop}></Smooth> : null}
        <Modal show={show}>
            <Header show={show} >
                <Title>{show.card.title}</Title>
                <Close onClick={handleDrop}/>
            </Header>
            <Card>
                <HeaderCard show={show}>
                    {show.card.initial ? <Date marginRight={'110px'}>Data Inicial: {show.card.initial}</Date> : null }
                    {show.card.final ? <Date>Previsão: {show.card.final}</Date> : null }
                </HeaderCard>

                <Priority> Prioridade: {(show.card.priority)} </Priority>

                <Description> {show.card.description} </Description>
            </Card>
        </Modal>
    </>
    );
}