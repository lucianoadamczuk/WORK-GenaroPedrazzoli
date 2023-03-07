const container__carouselInfinite = document.getElementById(`container__carouselInfinite`)
const slidetracksContainer__carouselInfinite = document.getElementById(`slidetracksContainer__carouselInfinite`)
const slidetrack__carouselInfinite = document.getElementById(`slidetrack__carouselInfinite`)




function startCarouselInfinite(){

    // clone and add slidetracks 
    let amountOfSlidetracksToAdd  = 100

    for (i = 0; i < amountOfSlidetracksToAdd; i++) {
        let slidetrackCopy= slidetrack__carouselInfinite.cloneNode(true)
        slidetracksContainer__carouselInfinite.appendChild(slidetrackCopy)
    }

    // controls
    let speed__carouselInfinite = amountOfSlidetracksToAdd * 1000
    let moveRight__carouselInfinite = slidetracksContainer__carouselInfinite.clientWidth


    // add styles with controls
    slidetracksContainer__carouselInfinite.style.transition = `${speed__carouselInfinite}s`
    slidetracksContainer__carouselInfinite.style.marginRight = `${moveRight__carouselInfinite * amountOfSlidetracksToAdd}px`
    slidetracksContainer__carouselInfinite.style.transitionTimingFunction = `linear`

}

startCarouselInfinite()


