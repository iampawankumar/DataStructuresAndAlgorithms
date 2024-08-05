

let form = document.querySelector('.form')

let divContainer = document.querySelector('.div_container')
console.log("🚀 ~ divContainer:", divContainer)

let h1Tag = document.getElementsByTagName('h1')[0]
console.log('h1Tag', h1Tag)


form.addEventListener('click', function(e){
    alert('current taget', e.target)
})
