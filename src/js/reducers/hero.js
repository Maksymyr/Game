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
                return {...state, curEXP: (exp-state.maxEXP), curHP: state.maxHP, lvl: (state.lvl + 1), maxEXP: (state.lvl+5)*10};
            }
            else {
                return {...state, curEXP: exp};
            }
        case types.HERO_STR: 
            return {...state, str: state.str + payload};
        case types.HERO_DEX: 
            return {...state, dex: state.dex + payload};
        case types.HERO_CON: 
            return {...state, con: state.con + payload, maxHP: (state.con + payload)*10};
        case types.HERO_INT: 
            return {...state, int: state.int + payload};
        case types.HERO_WIT: 
            return {...state, wit: state.wit + payload, maxMP: (state.wit + payload)*10};
        case types.HERO_DEATH: 
            return {...state, curHP: 0, curMP: 0, curEXP: (state.curEXP - state.lvl*10) > 0 ? (state.curEXP - state.lvl*10) : 0};
        default:
            return state;
    }
}