import { CLOSE_APPROVE_WITHDRAW_MODAL, OPEN_APPROVE_WITHDRAW_MODAL } from "../actions/modalAction";

const initState = {
    isOpen: false,
    id: '',
    requestedBalance: '',
    names: '',
    email: '',
    type: '',
};

const approveWithdrawReducer = (state = initState, action) => {
    switch(action.type) {
        case OPEN_APPROVE_WITHDRAW_MODAL:
            return {
                ...state,
                isOpen: true,
                id: action.payload.id,
                requestedBalance: action.payload.balance,
                names: action.payload.names,
                email: action.payload.email,
                type: action.payload.type,
            }
        case CLOSE_APPROVE_WITHDRAW_MODAL:
            return {
                ...state,
                isOpen: false,
                id: '',
                requestedBalance: '',
                names: '',
                email: '',
                type: '',
            }
        default: return state;
    }
}

export default approveWithdrawReducer;