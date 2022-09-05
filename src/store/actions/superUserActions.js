export const CLOSE_SUPER_USER = "CLOSE_SUPER_USER";
export const OPEN_SUPER_USER = "OPEN_SUPER_USER";

export const closeSuperUser = () => {
    return{ type: CLOSE_SUPER_USER }
}
export const openSuperUser = () => {
    return{ type: OPEN_SUPER_USER }
}