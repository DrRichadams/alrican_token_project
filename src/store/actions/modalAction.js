export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_WALLET_MODAL = "CLOSE_WALLET_MODAL";
export const OPEN_WALLET_MODAL = "OPEN_WALLET_MODAL";

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