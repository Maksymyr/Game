import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function inventory(state = InitialState.inventory, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_ITEM:
            return [...state, payload];
        case types.REMOVE_ITEM:
            return state.filter((item, index) => index !== payload);
        default:
            return state;
    }
}