

document.addEventListener('DOMContentLoaded', function(){

    console.log('dom content loaded!')

    let btnCountState = 0
    let debounceCountState = 0

    let btn = document.querySelector('.btn')
    let btnCount = document.querySelector('.btn_count')
    let debounceCount = document.querySelector('.debounce_count')

    let inputField = document.querySelector('.input_field')

    //custom debounce function
    function customDeboune(cb, delay){

        let timer
        return function(...args){
            if(timer) clearTimeout(timer)

            timer = setTimeout(() => {
                cb.apply(this, args)
            }, delay);
        }

    }

    //utilizing debounce function
    let debounceHandler = customDeboune(() => {

        debounceCountState++
        debounceCount.innerHTML = debounceCountState

    }, 800)


    btn.addEventListener('click', function(){

        btnCountState++
        btnCount.innerHTML = btnCountState 
        debounceHandler()

    })


    const debouncedInput = customDeboune((value) => {

        serverCall(value)

    }, 200)


    function serverCall(value){
        console.log('server called after 200ms', value)
    }

    inputField.addEventListener('input', function(e){
        this.value = e.target.value

        debouncedInput(e.target.value)
    })

})