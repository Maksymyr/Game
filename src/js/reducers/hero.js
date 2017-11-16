import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function hero(state = InitialState.hero, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_NAME:
            return {...payload};
        case types.CHANGE_ATCK:
            return {...state, atck: state.atck+payload}
        case types.CHANGE_DEF:
            return {...state, def: state.def+payload}
        case types.ADD_NEW_HERO: 
            return {...state, ...state.hero, ...payload };
        case types.HERO_HP: 
            if (state.curHP-payload > state.maxHP)
                return {...state, curHP: state.maxHP}
            else
                return {...state, curHP: Math.floor(state.curHP - payload)};
        case types.HERO_MP: 
            if (state.curMP-payload > state.maxMP)
                return {...state, curMP: state.maxMP}
            else
                return {...state, curMP: Math.floor(state.curMP - payload)};
        case types.HERO_EXP: 
            let exp = state.curEXP + payload;
            if (exp >= state.maxEXP){
                return {...state, curEXP: Math.floor(exp-state.maxEXP), curHP: state.maxHP, curMP: state.maxMP, lvl: (state.lvl + 1), 
                points: (state.points + 5), att_points: (state.att_points + 1), maxEXP: state.lvl < 5 ? state.maxEXP + (state.lvl+1)*10 : state.lvl < 10? state.maxEXP+75 : state.maxEXP+150};
            }
            else if (exp < 0) {
                return {...state, curEXP: 0};
            }
            else {
                return {...state, curEXP: Math.floor(exp)};
            }
        case types.HERO_STR: 
            if (state.type == "Warrior") 
                return {...state, atck: Math.floor((state.str + payload)*(100+state.atck)/100), str: state.str + payload};
            else 
                return {...state, str: state.str + payload};
        case types.HERO_DEX: 
            if (state.type == "Archer") 
                return {...state, atck: Math.floor((state.dex + payload)*(150+state.atck)/100), dex: state.dex + payload};
            else
                return {...state, dex: state.dex + payload};
        case types.HERO_CON: 
            return {...state, def: Math.floor((state.con + payload)*(100+state.def)/100), con: state.con + payload, maxHP: (state.con + payload)*10};
        case types.HERO_INT: 
            if (state.type == "Wizard") 
                return {...state, atck: Math.floor((state.int + payload)*(200+state.atck)/100), int: state.int + payload};
            else
                return {...state, int: state.int + payload};
        case types.HERO_WIT: 
            return {...state, wit: state.wit + payload, maxMP: (state.wit + payload)*10};
        case types.LVL_POINTS:
            return {...state, points: state.points - payload};
        case types.LVL_ATT_POINTS:
            return {...state, att_points: state.att_points - payload};
        case types.HERO_DEATH: 
            return {...state, curHP: 1, curMP: 1, curEXP: (state.curEXP - (state.lvl+1)*10) > 0 ? (state.curEXP - (state.lvl+1)*10) : 0};
        case types.HERO_CD1:
            return {...state, cdSkill1: payload};
        case types.HERO_CD2:
            return {...state, cdSkill2: payload};
        case types.HERO_CD3:
            return {...state, cdSkill3: payload};
        case types.HERO_CD4:
            return {...state, cdSkill4: payload};
        case types.HERO_ATT1:
            return {...state, atck: Math.floor(state.atck*(100+payload)/100), att1: payload};
        case types.HERO_ATT2:
            return {...state, def: Math.floor(state.def*(100+payload)/100), att2: payload};
        case types.HERO_ATT3:
            return {...state, att3: payload};
        case types.HERO_ATT4:
            return {...state, att4: payload};
        default:
            return state;
    }
}