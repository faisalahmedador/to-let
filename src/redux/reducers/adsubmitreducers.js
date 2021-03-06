import {SUBMIT_NEW_ADD} from '../Constants'


export const adsubmitreducers = (state = {}, action) =>{

    switch(action.type){
        case SUBMIT_NEW_ADD: 
        return { state: action.payload}

        default:
            return {}
    }

}