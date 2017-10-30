import * as types from '../constants/ActionTypes';

export const addHeroType = (payload) => ({type: types.ADD_NEW_HERO, payload})
export const addHeroName = (payload) => ({type: types.ADD_NAME, payload})
export const changeForestLvl = (payload) => ({type: types.CHANGE_LVL, payload})
export const setEnemy = (payload) => ({type: types.SET_ENEMY, payload})
export const enemyHP = (payload) => ({type: types.ENEMY_HP, payload})
export const heroHP = (payload) => ({type: types.HERO_HP, payload})
export const heroMP = (payload) => ({type: type.HERO_MP, payload})
export const heroEXP = (payload) => ({type: types.HERO_EXP, payload})
export const setForestLvl = (payload) => ({type: types.SET_LVL, payload})
