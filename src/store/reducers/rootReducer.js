import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import addWalletReducer from "./addWalletReducer";
import changeWalletReducer from "./changeWalletReducer";

const rootReducer = combineReducers({
    modalReducer,
    addWallet: addWalletReducer,
    changeWallet: changeWalletReducer,
});

export default rootReducer;