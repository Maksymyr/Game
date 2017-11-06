import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function hero(state = InitialState.hero, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_NAME:
            return {...payload};
        case types.ADD_NEW_HERO: 
            return {...state, ...state.hero, ...payload };
        case types.HERO_HP: 
            return {...state, curHP: state.curHP - payload};
        case types.HERO_MP: 
            return {...state, curMP: state.curMP - payload};
        case types.HERO_EXP: 
            let exp = state.curEXP + payload;
            if (exp >= state.maxEXP){
                return {...state, curEXP: (exp-state.maxEXP), curHP: state.maxHP, lvl: (state.lvl + 1), 
                points: (state.points + 5), att_points: (state.att_points + 1), maxEXP: (state.lvl+5)*Math.pow(5,state.lvl)};
            }
            else if (exp < 0) {
                return {...state, curEXP: 0};
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
        case types.LVL_POINTS:
            return {...state, points: state.points - 5};
        case types.LVL_ATT_POINTS:
            return {...state, att_points: state.att_points - 1};
        case types.HERO_DEATH: 
            return {...state, curHP: 0, curMP: 0, curEXP: (state.curEXP - (state.lvl+1)*10) > 0 ? (state.curEXP - (state.lvl+1)*10) : 0};
        case types.HERO_CD1:
            return {...state, cdSkill1: payload};
        case types.HERO_CD2:
            return {...state, cdSkill2: payload};
        case types.HERO_CD3:
            return {...state, cdSkill3: payload};
        case types.HERO_CD4:
            return {...state, cdSkill4: payload};
        case types.HERO_ATT1:
            return {...state, att1: state.att1 + payload};
        case types.HERO_ATT2:
            return {...state, att2: state.att2 + payload};
        case types.HERO_ATT3:
            return {...state, att3: state.att3 + payload};
        case types.HERO_ATT4:
            return {...state, att4: state.att4 + payload};
        default:
            return state;
    }
}