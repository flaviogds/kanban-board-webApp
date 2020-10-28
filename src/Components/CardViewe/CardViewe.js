import React from 'react';

import close from '../default/close.svg';

import { Header, HeaderCard, Modal, Smooth, Title, Card, VieweControl, Date, Priority, Description } from './styles'

export default function CardViewe ({show, handleDrop}){  
    return (
    <>
        {show.viewe ? <Smooth onClick={handleDrop} className="modal-drop"></Smooth> : null}
        <Modal show={show}>
            <Header show={show} >
                <Title>{show.modal}</Title>
                <img src={close} onClick={handleDrop} alt="close" className="close-modal-btn"/>
            </Header>
            <Card className="viewe" style={{background: show.card.properties.color}}>
                <HeaderCard show={show}>
                    <VieweControl> {show.children} </VieweControl>

                    {show.card.initial ? <Date>Data Inicial: {show.card.initial}</Date> : null }

                    {show.card.final ? <Date>Previsão: {show.card.final}</Date> : null }
                </HeaderCard>

                <Priority> Prioridade: {(show.card.priority)} </Priority>

                <Description> {show.card.description} </Description>
            </Card>
        </Modal>
    </>
    );
}