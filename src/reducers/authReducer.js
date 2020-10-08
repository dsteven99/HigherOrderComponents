import { UPDATE_SIGNIN } from 'actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case UPDATE_SIGNIN:
            return action.payload;
        default:
            return state;
    }
};