import accounting from 'accounting'

export function format(bilangan = 0, zeroHandler){
    // console.log(accounting.formatNumber(2000000))
    // if(bilangan == 0){
    //     return '0'
    // }
    if(!bilangan || bilangan == null || bilangan == "")
        return ""

// //    bilangan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
//     const reverse = bilangan.toString().split('').reverse().join('')
// 	let ribuan 	= reverse.match(/\d{1,3}/g)
//     ribuan	= ribuan.join('.').split('').reverse().join('')
    return accounting.formatNumber(bilangan,0,".",",")
    // return accounting.formatMoney(bilangan, {
    //     precision: 0,
    //     decimal: ",",
    //     thousand: ".",

    //     format: {
    //         pos : "%v",
    //         neg : "(%v)",
    //     }
    // });
}
export function formatWithComma(bilangan = 0){
    // console.log(accounting.formatNumber(2000000))
    // if(!bilangan || bilangan == null || bilangan == "")
    //     return ""
// //    bilangan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
//     const reverse = bilangan.toString().split('').reverse().join('')
// 	let ribuan 	= reverse.match(/\d{1,3}/g)
//     ribuan	= ribuan.join('.').split('').reverse().join('')
    //change comma to point
    // return bilangan.toString().replace(/./g , ",")

    //change point to comma
    return bilangan.toString().replace(/\./g,',')
    // return accounting.formatMoney(bilangan, {
    //     precision: 0,
    //     decimal: ",",
    //     thousand: ".",

    //     format: {
    //         pos : "%v",
    //         neg : "(%v)",
    //     }
    // });
}
export function idrToNumber(idr)
{
    // if(idr.toString().length == 0){
    //     return ""
    // }
    if(idr != undefined){
        return accounting.unformat(idr,",")
        // return parseInt(idr.toString().replace(/,.*|[^0-9]/g, ''), 10);
    }
    return idr
	
}