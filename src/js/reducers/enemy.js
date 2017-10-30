import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function enemy(state = InitialState.enemy, action) {
    let {payload, type} = action;
    switch(type){
        case types.SET_ENEMY:
            return {...state, ...payload};
        case types.ENEMY_HP: 
            return{...state, curHP: state.curHP - payload}
        
        default:
            return state;
    }
}