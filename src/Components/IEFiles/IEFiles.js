import React, { useState } from 'react';

import { Header, Modal, Title, Close, Body, TabNavigation, Footer, Button } from './styles'

import ImportFile from './ImportFile/ImportFile'
import ExportFile from './ExportFile/ExportFile'

export default function IEFiles ({open, close}){
    
    const [ openTab, setOpen ] = useState(false);

    return (
        <Modal show={open}>
            <Header show={open} >
                <Title>Importar/Exportar</Title>
                <Close onClick={close}/>
            </Header>
            <Body>
                <TabNavigation onClick={() => setOpen(!openTab)} disabled={openTab}>Importar arquivo</TabNavigation>
                <TabNavigation onClick={() => setOpen(!openTab)} disabled={!openTab}>Exportar arquivo</TabNavigation>
                
                <ImportFile open={openTab}/>
                <ExportFile open={!openTab}/>
            </Body>

            <Footer>
                <Button onClick={''}>Concluir</Button>
                
                <Button onClick={close}>Cancelar</Button>
            </Footer>
        </Modal>
    );
}