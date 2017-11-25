import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function forest(state = InitialState.levelOfForest, action) {
    let {payload, type} = action;
    switch(type){

        case types.LOAD_GAME:
        return payload.forest
        case types.CHANGE_LVL:
            return state + payload;
        case types.SET_LVL:
            return payload;
        default:
            return state;
    }
}