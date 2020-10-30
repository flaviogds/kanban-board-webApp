import React, { useState } from 'react';

import { Header, Theme, HeaderCard, Modal, Smooth, Title, Card, Date, Priority, Description, Close } from './styles'

export default function ThemeSelector (){  

    const [ show, setShow ] = useState(false)

    return (
    <>  
        <Theme onClick={() => setShow(!show)}>Temas</Theme>
        {show ? <Smooth onClick={() => setShow(!show)}></Smooth> : null}
        <Modal show={show}>
            <Header show={show} >
                <Title>Temas</Title>
                <Close onClick={() => setShow(!show)}/>
            </Header>

        </Modal>
    </>
    );
}