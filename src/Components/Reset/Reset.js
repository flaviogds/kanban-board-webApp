import React, { useEffect, useContext } from 'react';
import { Data } from '../state/Data/Data'
import { clearStorage } from '../localStorage'
import { collection } from '../default/defaultModel'
import { Remove } from './styles';

export default function ResetStorage (){

    const { data, setData } = useContext(Data)

    const menssage = (
        "Tem certeza que deseja remover seu Kanban Board, "+
        "esta ação não poderá ser desfeita. \n"+
        "\nDeseja continuar?"
    );

    const remove = () => {
        if(window.confirm(menssage)){
            clearStorage();
            setData({...collection})
        }
    }

    useEffect(() => {}, [data, setData])

    return (<Remove onClick={remove}>Remover Board</Remove>);
}