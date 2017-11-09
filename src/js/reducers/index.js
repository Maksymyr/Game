import {combineReducers} from 'redux';

import hero from './hero';
import forest from './forest';
import enemy from './enemy';
import notify from './notify';

const rootReducer = combineReducers({hero, forest, enemy, notify})

export default rootReducer;