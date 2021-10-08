import produce from 'immer';

function favReducer(state = [], action){
    switch(action.type){
        case 'ADD_FAV':
            return produce(state, draft => {
                const trackIndex = draft.findIndex(track => track.id === action.track.id)

                if(trackIndex >= 0){
                    console.log('Essa musica ja existe')
                }else{
                    draft.push({...action.track})
                }
            })
        case 'REMOVE_FAV':
            return produce(state, draft =>{
                const trackIndex = draft.findIndex(track => track.id === action.track.id)

                if(trackIndex >= 0){
                    draft.splice(trackIndex, 1)
                }
            })
        default:
            return state;
    }
}

export default favReducer;