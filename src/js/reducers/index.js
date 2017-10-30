import {combineReducers} from 'redux';
import hero from './hero';
import forest from './forest';
import enemy from './enemy';

const rootReducer = combineReducers({hero, forest, enemy})

export default rootReducer;