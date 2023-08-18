import Zdjd from 'zdjd'

let human_msg = '尊嘟假嘟'
let zdjd_msg = Zdjd.encode(human_msg)

console.log(zdjd_msg) // ov0 o.Ö OvO O_O ov0 Ö_0 0wO o_Ö ov0 Ö_o O.O O.Ö ov0 Ö_0 0wO o_Ö

console.log(Zdjd.isZdjd(zdjd_msg))

let msg2 = Zdjd.decode(zdjd_msg)

console.log(msg2) // 尊嘟假嘟
console.log(msg2 === human_msg) // true
