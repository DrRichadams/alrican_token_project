export const trustcoin_to_usd = (coins, rate) => {
    return parseFloat((coins / rate).toFixed(2))
}
export const usd_to_trustcoin = (usds, rate) => {
    return usds * rate
}

// export const affiliatesCut = (affiliates) => {
//     let sum = 0;
//     try {
//         for(let i = 0; i <= affiliates.length; i++) {
//             // console.log("Sum affil", affiliates[i].affiliatesFee * (affiliates[i].affiliatespercentage / 100))
//             sum += affiliates[i].affiliatesFee * (affiliates[i].affiliatespercentage / 100)
//         }
//     } catch (error) {
//         console.log(error)
//     }
//     return sum;
// }
export const affiliatesCut = (affiliates) => {
    const my_affiliates_sum = affiliates.reduce((acc, cur) => {
        return acc + (
            Number(cur.affiliatesFee) * (Number(cur.affiliatespercentage) / 100)
        )
    }, 0)
    return my_affiliates_sum;
}