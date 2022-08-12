import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import addWalletReducer from "./addWalletReducer";

const rootReducer = combineReducers({
    modalReducer,
    addWallet: addWalletReducer,
});

export default rootReducer;