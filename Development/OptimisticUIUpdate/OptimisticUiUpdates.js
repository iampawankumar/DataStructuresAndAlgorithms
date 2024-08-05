

document.addEventListener('DOMContentLoaded', function(){

    let likeBtn = document.getElementById("like_button")
    let likeCount = document.getElementById("like_count")

    let toasterContainer = document.querySelector(".toaster_msg_container")

    let toasterMsg = document.querySelector(".toaster_msg")



    let likes = likeCount.textContent

    likeBtn.addEventListener('click', async function() {

        console.log('disabled', likeBtn.disabled)
        if(likeBtn.disabled && likeBtn.disabled === true){
            return
        }

        console.log('clicked!')
        likes++
        updateDomElement(likeCount, likes)

        likeBtn.style.cursor = 'not-allowed'
        likeBtn.disabled = true

       try{
        let result = await mockAPiCal(likeCount, likes)
        console.log("🚀 ~ likeBtn.addEventListener ~ result:", result)

       

        if(result !== 200){
            likes--
            updateDomElementStyle(toasterContainer, "error", 'toasterMsg')
            updateDomElement(toasterMsg, "Error!")
        }else{
            updateDomElementStyle(toasterContainer, "success", 'toasterMsg')
            updateDomElement(likeCount, likes)
            updateDomElement(toasterMsg, "Success!")
        }
       }catch(e){
        likes--
        updateDomElementStyle(toasterContainer, "error", 'toasterMsg')
        console.log("🚀 ~ likeBtn.addEventListener ~ e:", e)
        updateDomElement(likeCount, likes)
        updateDomElement(toasterMsg, "Error!")
       }
       finally{
        likeBtn.style.cursor = 'pointer'
        likeBtn.disabled = false
       }

    

       
        
    })


    async function mockAPiCal(likeCount, likes){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(likeCount.textContent <=5){
                    resolve(200)
                }else{
                    reject()
                }
            }, 500);
        })
    }



    function updateDomElementStyle(element, result, elementName){

        if(elementName === "toasterMsg"){
            element.style.display = 'block'
            if(result === "success"){
                element.style.background = '#84bb84'
            }else{
                element.style.background = '#eea1a1'
            }

            setTimeout(() => {
                element.style.display = 'none'
            }, 1000);
        }
    }



    function updateDomElement(element, value){
        element.textContent = value
    }

})