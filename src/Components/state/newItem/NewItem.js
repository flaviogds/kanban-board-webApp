export const stateDefault = {
    card:
    {
        position:'',
        table:'',
        title: '',
        description: '',
        priority: 0,
        initial: '',
        final: '',
        properties : { color:"#FFFFFF" }
    },
    table:
    {
        name:'',
        position:'',
        cards:[]
    }
}

export default function NewItem(state, action) {

    switch (action.type){
        case "NEWCARD":
            return {...stateDefault, card: action.payload};
        case "NEWTABLE":
            return {...stateDefault, table: action.payload};
        case "DEFAULT":
            return stateDefault;
        default: 
            throw new Error();
    }
}