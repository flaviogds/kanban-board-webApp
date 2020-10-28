import React, { useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';
import { TYPE_NEW_TABLE, TYPE_DEFAULT } from '../state/NewItem/types';

import Input from  '../Input/Input'
import { Form, Title, Button } from './styles';

export default function NewTable() {

    const { data, setData } = useContext(Data);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

    const addTable = event => {
        event.preventDefault();
        if(data.tables.filter(table => table.name === newItem.table.name).length === 0 ){
            if (newItem.table.name !== '') {
                setData({ ...data, metadata: { total_tables: data.tables.length+1 }, tables: [...data.tables, newItem.table]});
                setNew( TYPE_DEFAULT );
            }
            else{
                window.alert("Insira um nome")
            }
        }
        else{
            window.alert("Já existe uma coluna com este nome")
        }
    }

    return(
        <Form method="post" onSubmit={addTable.bind(newItem)} >
            <Title>Nova Coluna</Title>
            <Input
                name="table"
        Form        type="text"
                value={newItem.table.name}
                onInput={event => setNew( { ...TYPE_NEW_TABLE,
                    payload: { ...newItem.table,
                        id: uuidv4(),
                        name: event,
                        position: data.tables.length
                    }
                } )}
            />
            <Button type="submit">Adicionar Coluna</Button>
        </Form>
    );
}