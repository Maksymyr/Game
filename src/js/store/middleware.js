import * as types from '../constants/ActionTypes';

const middleware = store => next => action => {
    next(action);
    if(action.type == types.CHANGE_LVL || types.SET_LVL){
        localStorage.setItem("Forest", JSON.stringify(store.getState().forest))
    }
    if(action.type == types.ADD_NEW_HERO || types.HERO_HP || types.HERO_MP || types.HERO_EXP || types.HERO_CON ||
    types.HERO_DEATH || types.HERO_DEX || types.HERO_INT || types.HERO_STR || types.HERO_WIT){
        localStorage.setItem("Hero", JSON.stringify(store.getState().hero))
    }
    if(action.type == types.SET_ENEMY || types.ENEMY_HP || types.KILLED){
        localStorage.setItem("Enemy", JSON.stringify(store.getState().enemy))
    }
    return;

}
export default middleware;