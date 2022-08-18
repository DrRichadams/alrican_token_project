export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_WALLET_MODAL = "CLOSE_WALLET_MODAL";
export const OPEN_WALLET_MODAL = "OPEN_WALLET_MODAL";
export const CLOSE_CHANGE_WALLET_MODAL = "CLOSE_CHANGE_WALLET_MODAL";
export const OPEN_CHANGE_WALLET_MODAL = "OPEN_CHANGE_WALLET_MODAL";
export const CLOSE_AVATAR_MODAL = "CLOSE_AVATAR_MODAL";
export const OPEN_AVATAR_MODAL = "OPEN_AVATAR_MODAL";

export const closeModal = () => {
    return{ type: CLOSE_MODAL }
}
export const openModal = () => {
    return{ type: OPEN_MODAL }
}

export const closeAddWalletModal = () => {
    return{ type: CLOSE_WALLET_MODAL }
}
export const openAddWalletModal = () => {
    return{ type: OPEN_WALLET_MODAL }
}
export const closeChangeWalletModal = () => {
    return{ type: CLOSE_CHANGE_WALLET_MODAL }
}
export const openChangeWalletModal = () => {
    return{ type: OPEN_CHANGE_WALLET_MODAL }
}
export const closeAvatarModal = () => {
    return{ type: CLOSE_AVATAR_MODAL }
}
export const openAvatarModal = () => {
    return{ type: OPEN_AVATAR_MODAL }
}