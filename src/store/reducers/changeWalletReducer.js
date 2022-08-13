import { CLOSE_CHANGE_WALLET_MODAL, OPEN_CHANGE_WALLET_MODAL } from "../actions/modalAction";

const initState = {
    isOpen: false
};

const changeWalletReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_CHANGE_WALLET_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_CHANGE_WALLET_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default: return state;
    }
}

export default changeWalletReducer;