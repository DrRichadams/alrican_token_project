import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import addWalletReducer from "./addWalletReducer";
import changeWalletReducer from "./changeWalletReducer";
import changeAvatarReducer from "./changeAvatarReducer";
import superUserReducer from "./superUserReducer";
import approveWithdrawReducer from "./approveWithdrawReducer";

const rootReducer = combineReducers({
    modalReducer,
    addWallet: addWalletReducer,
    changeWallet: changeWalletReducer,
    changeAvatar: changeAvatarReducer,
    superUser: superUserReducer,
    approveWithdraw: approveWithdrawReducer,
});

export default rootReducer;