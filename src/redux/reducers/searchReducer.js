

function searchReducer(state = "", action){
    switch(action.type){
        case 'ADD_SEARCH':
            return action.currentSearch;
        default:
            return state;    
        }
}

export default searchReducer;