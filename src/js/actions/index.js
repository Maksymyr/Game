import * as types from '../constants/ActionTypes';

export const addHeroType = (payload) => ({type: types.ADD_NEW_HERO, payload})
export const addHeroName = (payload) => ({type: types.ADD_NAME, payload})
export const changeForestLvl = (payload) => ({type: types.CHANGE_LVL, payload})