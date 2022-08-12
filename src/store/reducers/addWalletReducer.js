import { CLOSE_WALLET_MODAL, OPEN_WALLET_MODAL } from "../actions/modalAction";

const initState = {
    isOpen: false
};

const addWalletReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_WALLET_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_WALLET_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default: return state;
    }
}

export default addWalletReducer;