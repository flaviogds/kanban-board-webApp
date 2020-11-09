import React, { useContext, useState } from 'react';
import { Data } from '../../state/Data/Data'

import { Download, Tab, Link, Button } from './styles'

export default function ExportFile(props) {

    const { data } = useContext(Data)

    const [ url, setUrl ] = useState( {
            link: window.URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "text/plain"})),
            name: 'my-kanban-borad.json'
        }
    )

    if(props.open){
        return (
            <Tab display={props.open}>
                <Download size={'9rem'}/>
                <Link download={url.name} href={url.link} >
                    <Button>
                        Download
                    </Button>
                </Link>
            </Tab>
        );
    }else{
        return null;
    }
}