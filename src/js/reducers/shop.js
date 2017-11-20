import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';
import gold from '../../img/Items/Money.jpg';

export default function shop(state = InitialState.shop, action) {
    let {payload, type} = action;
    switch(type){
        case types.DEL_SHOP:
            return [{img: gold, name: "Gold", type: "money", category: "money", class: "money", price: 1, quantity: 10, used: false}];
        case types.SHOP_MONEY:
            
            state[0].quantity = state[0].quantity+payload;
            return state;

        case types.ADD_SHOP:
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

        case types.REMOVE_SHOP:
            state.find((item, index) => {
                if (item.name == payload.name) {
                    item.quantity -= 1;
                    if (item.quantity <= 0) {
                        state.splice(index, 1);
                    }
                }
            });
            return state;
        default:
            return state;
    }
}