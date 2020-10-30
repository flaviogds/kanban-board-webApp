import React, { useEffect, useContext } from 'react';
import { Data } from '../state/Data/Data'
import { clearStorage } from '../localStorage'
import { collection } from '../default/defaultModel'
import { Remove } from './styles';

export default function ResetStorage (){

    const { data, setData } = useContext(Data)

    const remove = () => {
        if(window.confirm(
            "Tem certeza que deseja remover seu Kanban Board, esta ação não poderá ser desfeita.\n\nDeseja continuar?")){
            clearStorage();
            setData({...collection})
        }
    }

    useEffect(() => {}, [data, setData])

    return (<Remove onClick={remove}>Remover Board</Remove>);
}