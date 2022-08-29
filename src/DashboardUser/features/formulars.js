export const trustcoin_to_usd = (coins, rate) => {
    return parseFloat((coins / rate).toFixed(2))
}
export const usd_to_trustcoin = (usds, rate) => {
    return usds * rate
}