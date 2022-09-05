import { CLOSE_SUPER_USER, OPEN_SUPER_USER } from "../actions/superUserActions";

const initState = {
    isSuper: false
};

const superUserReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_SUPER_USER:
            return {
                ...state,
                isSuper: true
            }
        case CLOSE_SUPER_USER:
            return {
                ...state,
                isSuper: false
            }
        default: return state;
    }
}

export default superUserReducer;