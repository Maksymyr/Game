import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function inventory(state = InitialState.inventory, action) {
    let {payload, type} = action;
    switch(type){
        case types.ADD_ITEM:
            return [...state, payload];
        case types.REMOVE_ITEM:
            return state.filter((item, index) => index !== payload);
        case types.USE_ITEM:
            switch(payload.category) {
                case "armor":
                    state.find((item, index) => {
                        if (payload.name == item.name) {
                            item.used = true;
                        }
                        else if (payload.type == item.type) {
                            item.used = false;
                        }
                    })
                    return [...state];
                case "weapon":
                state.find((item, index) => {
                    if (payload.name == item.name) {
                        item.used = true;
                    }
                    else if (payload.type == item.type) {
                        item.used = false;
                    }
                })
                return [...state];
                case "common":
                    state.find((item, index) => {
                        if (payload.name == item.name) {
                            item.quantity -= 1;
                            if (item.quantity == 0){
                                state.splice(index, 1);
                            }
                        }
                    })
                    return [...state];
                default:
                    return state;
            }
        default:
            return state;
    }
}