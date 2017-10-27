import {combineReducers} from 'redux';
import hero from './hero';
import forest from './forest';

const rootReducer = combineReducers({hero, forest})

export default rootReducer;