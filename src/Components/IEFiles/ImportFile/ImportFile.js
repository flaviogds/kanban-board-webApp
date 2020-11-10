import React, { useState } from 'react';

import { Tab, Input, Footer, Button } from './styles'

export default function ImportFiles ({ open, close, submit}) {

    const [ newData, setNewData ] = useState(
        {
            reference: '',
            metadata: { total_tables: 0, theme: 0, total_tasks: 0 },
            tables: []
        }
    )

    let file = '';

    const uploadFile = target => {
        file = target.files[0];

        if( file !== '' ){
            if(window.File && window.FileReader && window.FileList && window.Blob){
                if(file.type.match(/application\/json/)){
                    let reader = new FileReader();
                    reader.onload = () => {
                        try {
                            if(JSON.parse(reader.result).reference === 'kanban-board'){
                                setNewData({...JSON.parse(reader.result)});
                            }
                            else{
                                alert("Arquivo não compativel.");
                            }
                        } catch(err) {
                            console.log(err)
                        }
                    }
                    reader.readAsText(file);
                }
                else {
                    alert("Arquivo não suportado");
                }
            }
            else{
                alert("Não foi possivel executar.");
            }
        }
    }

    return(
        <Tab display={open ? 'inline-grid' : 'none'}>
            <Input type="file" accept="JSON/*" onChange={event => uploadFile(event.target) } />

            <Footer>
                <Button onClick={ newData.reference !== '' ? submit.bind(this, newData) : null }>Concluir</Button>
                <Button onClick={close}>Cancelar</Button>
            </Footer>
        </Tab>
    );
}
