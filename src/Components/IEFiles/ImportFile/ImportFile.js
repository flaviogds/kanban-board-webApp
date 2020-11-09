import React, { useState, useContext, useEffect } from 'react'
import { Data } from '../../state/Data/Data'

import { Tab, Load, Input, Loading } from './styles'

export default function ImportFiles (props) {

    const [ newData, setNewData ] = useState(
        {
            fileName: '',
            collection: {
            reference: "",
            metadata: { total_tables: 0 },
            tables: []
            }
        }
    )

    if( newData.fileName !== '' ){
        if(window.File && window.FileReader && window.FileList && window.Blob){
            if(newData.fileName.files[0].type.match(/text.*/)){
                let reader = new FileReader();
                reader.onload = () => {
                    try {
                        setNewData({...newData, collection: JSON.parse(reader.result)});
                    } catch(err) {
                        console.log(err)
                    }
                }
                reader.readAsText(newData.fileName.files[0]);
            }
            else {
                alert("Arquivo não suportado");
            }
        }
        else{
            alert("Não foi possivel executar.");
        }
    }

    return(
        <Tab display={props.open}>
            <Input type="file" onChange={event => setNewData({...newData, fileName: event.target}) } />
        </Tab>
    );
}
