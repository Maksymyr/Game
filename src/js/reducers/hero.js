import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function hero(state = InitialState.hero, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_NAME:
            return {...state, hero: payload};
        case types.ADD_NEW_HERO: 
            return {...state, hero: {  ...state.hero, ...payload} };
    
        default:
            return state;
    }
}