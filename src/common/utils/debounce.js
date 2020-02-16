export function debounce(fnc, wait = 200) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fnc.apply(this, args)
    }, wait)
  }
}