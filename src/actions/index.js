import { SAVE_COMMENT, UPDATE_SIGNIN} from 'actions/types'

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const updateSignin = (value) => {
    return {
        type: UPDATE_SIGNIN,
        payload: value
    };
};
