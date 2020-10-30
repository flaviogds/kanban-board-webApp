import { NEW_TABLE, NEW_CARD, DEFAULT } from './types';

export const stateDefault = {
    card:
    {
        id: '',
        position:'',
        table:'',
        title: '',
        description: '',
        priority: 'Normal',
        initial: '',
        final: '',
        properties : {
            lock: false,
            alert:false,
            concluded: false,
            color:"#FFFFFF"
        }
    },
    table:
    {
        name:'',
        position:'',
        lock: true,
        cards:[]
    }
}

export default function NewItem(state, action) {

    switch (action.type){
        case NEW_CARD:
            return {...stateDefault, card: action.payload};
        case NEW_TABLE:
            return {...stateDefault, table: action.payload};
        case DEFAULT:
            return stateDefault;
        default: 
            throw new Error();
    }
}