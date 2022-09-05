import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import addWalletReducer from "./addWalletReducer";
import changeWalletReducer from "./changeWalletReducer";
import changeAvatarReducer from "./changeAvatarReducer";
import superUserReducer from "./superUserReducer";

const rootReducer = combineReducers({
    modalReducer,
    addWallet: addWalletReducer,
    changeWallet: changeWalletReducer,
    changeAvatar: changeAvatarReducer,
    superUser: superUserReducer,
});

export default rootReducer;