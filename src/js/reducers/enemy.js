import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function enemy(state = InitialState.enemy, action) {
    let {payload, type} = action;
    switch(type){
 
        case types.LOAD_GAME:
            return {...payload.enemy}
        case types.SET_ENEMY:
            return {...state, ...payload};
        case types.ENEMY_HP: 
            return{...state, curHP: state.curHP - payload}
        case types.KILLED:
            return {};
        default:
            return state;
    }
}