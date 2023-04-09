export function formatDate(time: any, fmt: any) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str: any) {
  return ('00' + str).substr(str.length)
}

export function formatMonthDay(time: any) {
  return formatDate(time, 'MM月dd日')
}

export function formatMinuteSecond(time: any) {
  return formatDate(time, 'mm:ss')
}
