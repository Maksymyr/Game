import * as types from '../constants/ActionTypes';

export const addHeroType = (payload) => ({type: types.ADD_NEW_HERO, payload});
export const addHeroName = (payload) => ({type: types.ADD_NAME, payload});
export const changeForestLvl = (payload) => ({type: types.CHANGE_LVL, payload});
export const setEnemy = (payload) => ({type: types.SET_ENEMY, payload});
export const enemyHP = (payload) => ({type: types.ENEMY_HP, payload});
export const heroHP = (payload) => ({type: types.HERO_HP, payload});
export const heroMP = (payload) => ({type: types.HERO_MP, payload});
export const heroEXP = (payload) => ({type: types.HERO_EXP, payload});
export const setForestLvl = (payload) => ({type: types.SET_LVL, payload});
export const heroSTR = (payload) => ({type: types.HERO_STR, payload});
export const heroDEX = (payload) => ({type: types.HERO_DEX, payload});
export const heroCON = (payload) => ({type: types.HERO_CON, payload});
export const heroINT = (payload) => ({type: types.HERO_INT, payload});
export const heroWIT = (payload) => ({type: types.HERO_WIT, payload});
export const heroDeath = (payload) => ({type: types.HERO_DEATH, payload});
export const enemyKilled = (payload) => ({type: types.KILLED, payload});
export const heroLvlPoints = (payload) => ({type: types.LVL_POINTS, payload});
export const skill1CD = (payload) => ({type: types.HERO_CD1, payload});
export const skill2CD = (payload) => ({type: types.HERO_CD2, payload});
export const skill3CD = (payload) => ({type: types.HERO_CD3, payload});
export const skill4CD = (payload) => ({type: types.HERO_CD4, payload});


