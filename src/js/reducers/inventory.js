import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';
import gold from '../../img/Items/Money.jpg';

export default function inventory(state = InitialState.inventory, action) {
    let {payload, type} = action;
    switch(type){
        case types.DEL_INVENTORY:
            return [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 10, used: false}];
        case types.MOVE_MONEY:
            
            state[0].quantity = state[0].quantity+payload;
            return state;

        case types.ADD_ITEM:
            if (state.find((item, index) => item.name == payload.name)) {
               state.find((item, index) => {
                    if (item.name == payload.name)
                        item.quantity +=1;
                })
                return state;
            }
            else {
                
                return [...state, {...payload, quantity: 1}];
            }

        case types.REMOVE_ITEM:
            state.find((item, index) => {
                if (item.name == payload.name) {
                    item.quantity -= 1;
                    if (item.quantity <= 0) {
                        state.splice(index, 1);
                    }
                }
            });
            return state;

        case types.USE_ITEM:
            switch(payload.category) {
                case "armor":
                    state.find((item, index) => {
                        if (payload.name == item.name) {
                            item.used = !item.used;
                        }
                        else if (payload.type == item.type) {
                            item.used = false;
                        }
                    })
                    return [...state];
                case "weapon":
                state.find((item, index) => {
                    if (payload.name == item.name) {
                        item.used = !item.used;
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