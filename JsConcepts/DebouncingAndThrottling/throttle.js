

document.addEventListener('DOMContentLoaded', function(){


    let btnCountState = 0
    let throttleCountState = 0

    let btn = document.querySelector('.btn')
    let btnCount = document.querySelector('.btn_count')
    let throttleCount = document.querySelector('.throttle_count')

    let inputField = document.querySelector('.input_field')

    900
    0

    //custom throttle function
    function customThrottle(cb, delay){

        let last = 0
        return function(...args){
            let now = Date.now()
            if(now - last < delay) return
            last = now
            cb.apply(this, args)
          
        }

    }

    const throttleHandler = customThrottle(() => {

        throttleCountState++
        throttleCount.innerHTML = throttleCountState

    }, 800)

    btn.addEventListener('click', function(){

        btnCountState++
        btnCount.innerHTML = btnCountState 
        throttleHandler()

    })


})