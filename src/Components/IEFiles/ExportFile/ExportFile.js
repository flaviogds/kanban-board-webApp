import React, { useState } from 'react';

import { Download, Tab, Link, Button, Footer } from './styles'

export default function ExportFile({ open, close, data}) {

    const [ url ] = useState( {
            link: window.URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "application/json"})),
            name: 'my-kanban-borad.json'
        }
    )

    if(open){
        return (
            <Tab display={open ? 'inline-grid' : 'none'}>
                <Download size={90}/>
                <Link download={url.name} href={url.link} >
                    <Button>
                        Download
                    </Button>
                </Link>
                <Footer>
                    <Button onClick={close}>Concluir</Button>
                </Footer>
            </Tab>
        );
    }else{
        return null;
    }
}