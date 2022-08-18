import { CLOSE_AVATAR_MODAL, OPEN_AVATAR_MODAL } from "../actions/modalAction";

const initState = {
    isOpen: false
};

const changeAvatarReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_AVATAR_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_AVATAR_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default: return state;
    }
}

export default changeAvatarReducer;