import {combineReducers} from 'redux';

import hero from './hero';
import forest from './forest';
import enemy from './enemy';
import notify from './notify';
import inventory from './inventory';
import shop from './shop';

const rootReducer = combineReducers({hero, forest, enemy, notify, inventory, shop})

export default rootReducer;