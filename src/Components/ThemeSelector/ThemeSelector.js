import React from 'react';
import themes from './themes';

import { Header, Modal,Title, Close, Selector, Sub, Footer, Button, Sample } from './styles'

export default function ThemeSelector ({open, close, current, response}){

    return (
        <Modal show={open}>
            <Header show={open} >
                <Title>Temas</Title>
                <Close onClick={close}/>
            </Header>
            <Selector>
                <Sub>
                    {themes.map((theme, indice) => (
                        <Sample theme={{...theme}} key={theme.title} onClick={response.bind(this, indice)}>
                            <header theme={{...theme}}>
                                {theme.title}
                            </header>
                            <div></div>
                        </Sample>
                    ))}
                </Sub>
                <Footer>
                    <Button onClick={close}>Concluir</Button>
                    <Button onClick={response.bind(this, current)}>Cancelar</Button>
                </Footer>
            </Selector>
        </Modal>
    );
}