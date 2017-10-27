import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function forest(state = InitialState.levelOfForest, action) {
    let {payload, type} = action;
    switch(type){
        case types.CHANGE_LVL:
            return state + payload;
        default:
            return state;
    }
}