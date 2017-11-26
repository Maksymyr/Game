import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function portal(state = InitialState.portal, action) {
    let {type, payload} = action;

    switch(type) {
    case types.LOAD_GAME:
        return payload.portal
    case types.SET_PORTAL:
        return payload;
    default:
        return state;
    }
};