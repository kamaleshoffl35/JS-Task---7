function debounce(func, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setInterval(() => {
            func.apply(this, args)
        }, delay)
    }
 
}
function onresize() {
    console.log("resized :", new Date().toLocaleDateString)
}
window.addEventListener("resize", debounce(onresize, 500))