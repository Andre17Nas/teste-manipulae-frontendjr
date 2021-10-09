import produce from 'immer';
import {toast} from 'react-toastify';

function favReducer(state = [], action){
    switch(action.type){
        case 'ADD_FAV':
            return produce(state, draft => {
                const trackIndex = draft.findIndex(track => track.id === action.track.id)

                if(trackIndex >= 0){
                    toast('Opa! você ja adicionou essa música em favoritos!');
                }else{
                    draft.push({...action.track})
                    toast('Música adicionada em favoritos!');
                }
            })
        case 'REMOVE_FAV':
            return produce(state, draft =>{
                const trackIndex = draft.findIndex(track => track.id === action.track.id)

                if(trackIndex >= 0){
                    draft.splice(trackIndex, 1)
                    toast('Musica deletada!');
                }
            })
        default:
            return state;
    }
}

export default favReducer;