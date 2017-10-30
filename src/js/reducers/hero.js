import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function hero(state = InitialState.hero, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_NAME:
            return {...state, ...payload};
        case types.ADD_NEW_HERO: 
            return {...state, ...state.hero, ...payload };
        case types.HERO_HP: 
            return {...state, curHP: state.curHP - payload};
        case types.HERO_MP: 
            return {...state, curMP: state.curMP - payload};
        case types.HERO_EXP: 
            let exp = state.curEXP + payload;
            if (exp >= state.maxEXP){
                return {...state, curEXP: (exp-state.maxEXP), lvl: (state.lvl + 1), maxEXP: (state.lvl+5)*10};
            }
            else {
                return {...state, curEXP: exp};
            }
        default:
            return state;
    }
}