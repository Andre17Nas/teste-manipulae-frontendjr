export default function favReducer(state = [], action){
    switch(action.type){
        case 'ADD_FAV':
            return [...state]
        case 'REMOVE_FAV':
            return [...state]
        default:
            return state;
    }
}