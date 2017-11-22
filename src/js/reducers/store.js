import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function store(state = InitialState, action) {
    let {type, payload} = action;

    switch(type) {
    case(types.SAVE_GAME):
        return state;
    case(types.RESTART_GAME):
        return state;
    default:
        return state;
    }
};