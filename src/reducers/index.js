import {combineReducers} from 'redux';
import commentReducer from 'reducers/commentReducer';
import authReducer, {} from 'reducers/authReducer';

export default combineReducers({
    comments: commentReducer,
    auth: authReducer
});
