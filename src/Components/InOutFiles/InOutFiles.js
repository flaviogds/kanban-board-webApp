import React, { useState } from 'react';

import { Header, InAndOut, HeaderCard, Modal, Smooth, Title, Card, Date, Priority, Description, Close } from './styles'

export default function InOutFiles (){  

    const [ show, setShow ] = useState(false)

    return (
    <>  
        <InAndOut onClick={() => setShow(!show)}>Importar/Exportar</InAndOut>
        {show ? <Smooth onClick={() => setShow(!show)}></Smooth> : null}
        <Modal show={show}>
            <Header show={show} >
                <Title>Importar/Exportar</Title>
                <Close onClick={() => setShow(!show)}/>
            </Header>

        </Modal>
    </>
    );
}