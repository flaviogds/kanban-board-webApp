import React from 'react';

import { Header, Modal,Title, Close, Body, Description, Link, Copyright, Footer, Button } from './styles'

export default function About ({open, close}){

    return (
        <Modal show={open}>
            <Header show={open} >
                <h3>Sobre</h3>
                <Close onClick={close}/>
            </Header>
            <Body>
                <Title>Kanban Board Web App</Title>

                <Description>
                    Este web app é uma aplicação simples e 
                    intuitiva para gerenciar fluxos de tarefas no dia-a-dia.
                    <br/><br/>
                    Foi desenvolvido como parte do meu portifólio profissional
                    e continuará sendo mantido com um projeto open source.
                    <br/><br/>
                    Espero que gostem.
                    <br/><br/>
                </Description>

                <Link href="https://github.com/flaviogds/kanban-board-webApp#kanban-board-web-app">consulte a página do readme</Link>
                <Link href="https://github.com/flaviogds/kanban-board-webApp">consulte o código fonte</Link>
                
                <Copyright>desenvolvido por</Copyright>

                <Link href="https://github.com/flaviogds"> Flávio Santos</Link>
                
            </Body>
            <Footer>
                <Button onClick={close}>Fechar</Button>
            </Footer>
        </Modal>
    );
}