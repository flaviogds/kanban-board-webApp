import React, { useState, useContext } from 'react';
import { Data } from '../state/Data/Data'

import ImportFile from './ImportFile/ImportFile'
import ExportFile from './ExportFile/ExportFile'

import { Header, Modal, Title, Close, Body, TabNavigation } from './styles'

export default function IEFiles ({open, close}){
    
    const [ openTab, setOpen ] = useState(true);

    const { data, setData } = useContext(Data);

    return (
        <Modal show={open}>
            <Header show={open} >
                <Title>Importar/Exportar</Title>
                <Close onClick={close}/>
            </Header>
            <Body>
                <TabNavigation
                    onClick={() => setOpen(!openTab)}
                    disabled={openTab}
                >
                    Importar arquivo
                </TabNavigation>

                <TabNavigation
                    onClick={() => setOpen(!openTab)}
                    disabled={!openTab}
                >
                    Exportar arquivo
                </TabNavigation>
                
                <ImportFile
                    open={openTab}
                    close={close}
                    submit={target => setData({...target})}
                />
                <ExportFile
                    open={!openTab}
                    close={close}
                    data={data}
                />
            </Body>
        </Modal>
    );
}