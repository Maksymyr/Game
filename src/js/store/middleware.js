import * as types from '../constants/ActionTypes';

const middleware = store => next => action => {
    next(action);
    const data = store.getState();

    if(action.type == types.SAVE_GAME){
           fetch('/save', {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
              console.log("this is res", res)
            }).catch((err) => {
              console.log(err)
            })
    }
    if(action.type == types.RESTART_GAME) {
        console.log(data.hero)
        
        fetch('/restart', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(data.hero)
          }).then((res) => {
            console.log("this is res", res)
          }).catch((err) => {
            console.log(err)
        })
    }


    if(action.type == types.CHANGE_LVL || types.SET_LVL){
        localStorage.setItem("Forest", JSON.stringify(store.getState().forest))
    }
    if(action.type == types.ADD_NEW_HERO) {
        fetch('/save', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log("this is res", res)
          }).catch((err) => {
            console.log(err)
          })
    }

    if(action.type == types.ADD_NEW_HERO || types.HERO_HP || types.HERO_MP || types.HERO_EXP || types.HERO_CON ||
    types.HERO_DEATH || types.HERO_DEX || types.HERO_INT || types.HERO_STR || types.HERO_WIT || types.LVL_POINTS ||
    types.HERO_CD1 || types.HERO_CD2 || types.HERO_CD3 || types.HERO_CD4 || types.CHANGE_DEF || types.CHANGE_ATCK){
        localStorage.setItem("Hero", JSON.stringify(store.getState().hero))
    }
    if(action.type == types.SET_ENEMY || types.ENEMY_HP || types.KILLED){
        localStorage.setItem("Enemy", JSON.stringify(store.getState().enemy))
    }
    if(action.type == types.ADD_ITEM || types.REMOVE_ITEM || types.USE_ITEM || types.DEL_INVENTORY || 
        types.MOVE_MONEY || types.RELOAD_INV){

        localStorage.setItem("Inventory", JSON.stringify(store.getState().inventory))
    }
    if(action.type == types.ADD_SHOP || types.REMOVE_SHOP || types.DEL_SHOP || types.SHOP_MONEY){
        localStorage.setItem("Shop", JSON.stringify(store.getState().shop))
    }
    if(action.type == types.SET_PORTAL){
      localStorage.setItem("Portal", JSON.stringify(store.getState().portal))
    }
    return;

}
export default middleware;