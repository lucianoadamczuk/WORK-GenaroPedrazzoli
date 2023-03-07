const video__aboutMe__callToAction = document.getElementById(`video__aboutMe__callToAction`)

// play the video when is in the view
window.addEventListener(`scroll`, e =>{
    if(window.scrollY >= video__aboutMe__callToAction.scrollHeight){
        setTimeout(() => {
            video__aboutMe__callToAction.play()
        }, 1000);
    }
})

