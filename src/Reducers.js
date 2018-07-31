import { combineReducers } from 'redux';
import AuthReducers from './reducers/AuthReducers';

const Reducers = combineReducers({
    auth:AuthReducers
});

export default Reducers;