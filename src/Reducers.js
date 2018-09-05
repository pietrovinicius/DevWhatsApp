import { combineReducers } from 'redux';
import AuthReducers from './reducers/AuthReducers';
import ChatReducer from './reducers/ChatReducer';

const Reducers = combineReducers({
    auth:AuthReducers,
    chat:ChatReducer
});

export default Reducers;