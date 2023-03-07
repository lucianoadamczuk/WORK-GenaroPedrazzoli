// how many days will you workout?
const workoutDays3 = document.getElementById(`workoutDays3`)
const workoutDays4 = document.getElementById(`workoutDays4`)
const workoutDays5 = document.getElementById(`workoutDays5`)

// how many weeks?
const workoutWeeks4 = document.getElementById(`workoutWeeks4`)
const workoutWeeks8 = document.getElementById(`workoutWeeks8`)
const workoutWeeks12 = document.getElementById(`workoutWeeks12`)

// What is your level?
const workoutLevel1 = document.getElementById(`workoutLevel1`)
const workoutLevel2 = document.getElementById(`workoutLevel2`)
const workoutLevel3 = document.getElementById(`workoutLevel3`)

// ! Prices controller
let days3Weeks4 = 1000
let days4Weeks4 = 2000
let days5Weeks4 = 3000

let days3Weeks8 = 4000
let days4Weeks8 = 5000
let days5Weeks8 = 6000

let days3Weeks12 = 7000
let days4Weeks12 = 8000
let days5Weeks12 = 9000

// information catchers
let catchPrice
let catchExperience
let catchDays
let catchWeeks

const hirePlan = document.getElementById(`hirePlan`)
const hirePlanSecondView = document.getElementById(`hirePlanSecondView`)
const hirePlanSecondViewReal = document.getElementById(`hirePlanSecondViewReal`)
const hirePlan__sendMessageSection = document.getElementById(`hirePlan__sendMessageSection`)

// Hire button generator
function showContentInPriceContainer(){
    const priceContainer__hirePlan = document.getElementById(`priceContainer__hirePlan`)
    
    priceContainer__hirePlan.innerHTML = 
    `
    <p class="size-xl">${catchPrice}</p>
    <a class="button" id="buttonBuyPlan">
        <p class="size-l">Contratar</p>
    </a>
    `

    // Write in html
    buttonBuyPlan.addEventListener(`click`, e => {
        autocomplete_sendMessage__hirePlan.textContent = `${catchDays} veces por semana durante ${catchWeeks} semanas. Mi nivel de experiencia es ${catchExperience}.`
    
        setTimeout(() => {
            // add transition velocity
            hirePlan.style.transition = `1s`
            hirePlanSecondView.style.transition = `1s`
            hirePlanSecondViewReal.style.transition = `1s`
            hirePlan__sendMessageSection.style.transition = `1s`
            
            // reduce opacity
            hirePlan.style.opacity = `0%`
            hirePlanSecondView.style.opacity = `0%`
            hirePlanSecondViewReal.style.opacity = `0%`

            
            setTimeout(() => {
                hirePlan__sendMessageSection.style.display = `flex`
                hirePlan.style.display = `none`
                hirePlanSecondView.style.display = `none`
                hirePlanSecondViewReal.style.display = `none`
            }, 1000);

            // increase opacity
            setTimeout(() => {
                hirePlan__sendMessageSection.style.opacity = `100%`
            }, 1200);
            
            
            
        }, 1000);
    })
}

// Show the correct price related to the days and weeks choosen
window.addEventListener(`click`, e=> {

    if(workoutLevel1.checked || workoutLevel2.checked || workoutLevel3.checked){

        // ** 3 days ** 
        if(workoutDays3.checked && workoutWeeks4.checked){
            catchPrice = days3Weeks4
            showContentInPriceContainer()
        }

        if(workoutDays3.checked && workoutWeeks8.checked){
            catchPrice = days4Weeks4
            showContentInPriceContainer()
        }

        if(workoutDays3.checked && workoutWeeks12.checked){
            catchPrice = days5Weeks4
            showContentInPriceContainer()
        }




        // ** 4 days ** 
        if(workoutDays4.checked && workoutWeeks4.checked){
            catchPrice = days4Weeks4
            showContentInPriceContainer()
        }

        if(workoutDays4.checked && workoutWeeks8.checked){
            catchPrice = days4Weeks8
            showContentInPriceContainer()
        }

        if(workoutDays4.checked && workoutWeeks12.checked){
            catchPrice = days4Weeks12
            showContentInPriceContainer()
        }




        // ** 5 days ** 
        if(workoutDays5.checked && workoutWeeks4.checked){
            catchPrice = days5Weeks4
            showContentInPriceContainer()
        }

        if(workoutDays5.checked && workoutWeeks8.checked){
            catchPrice = days5Weeks8
            showContentInPriceContainer()
        }

        if(workoutDays5.checked && workoutWeeks12.checked){
            catchPrice = days5Weeks12
            showContentInPriceContainer()
        }
    }

    // * fill catcher with their correct values
    // let catchExperience
    if(workoutLevel1.checked){
        catchExperience  = `Ninguna/Poca`
    }
    else if(workoutLevel2.checked){
        catchExperience = `Intermedia`
    }
    else if(workoutLevel3.checked){
        catchExperience = `Mucha`
    }

    // let catchDays
    if(workoutDays3.checked){
        catchDays = 3
    }
    else if(workoutDays4.checked){
        catchDays = 4
    }
    else if(workoutDays5.checked){
        catchDays = 5
    }

    // let catchWeeks
    if(workoutWeeks4.checked){
        catchWeeks = 4
    }
    else if(workoutWeeks8.checked){
        catchWeeks = 8
    }
    else if(workoutWeeks12.checked){
        catchWeeks = 12
    }
})

    

// ***** send message *****
const autocomplete_sendMessage__hirePlan = document.getElementById(`autocomplete_sendMessage__hirePlan`)

const fillWithName = document.getElementById(`fillWithName`)
const buttonWP = document.getElementById(`buttonWP`)
const hirePlan__textContainer = document.getElementById(`hirePlan__textContainer`)
const specialText__hirePlan = document.getElementById(`specialText__hirePlan`)



// check if the input is filled
window.addEventListener(`keyup`, e => {
    
    if(fillWithName.value.length > 0){
        // attachment reminder
        hirePlan__textContainer.style.opacity = `100%`        
        specialText__hirePlan.classList.add(`specialTextAnimation`)
        
        // add button styles and links
        buttonWP.setAttribute(`href`, `href="https://web.whatsapp.com"`)
        buttonWP.classList.add(`buttonWP__animation`)
        buttonWP.setAttribute(`href`, `https://wa.me/5491153376931?text=*Nuevo%20Asesorado*%20¡Hola%20Gena!%20¿Cómo%20estás?%20Mi%20nombre%20es%20${fillWithName.value}%20y%20vamos%20a%20estar%20entrenando%20juntos%20${catchDays}%20veces%20por%20semana%20durante%20${catchWeeks}%20semanas.%20Mi%20nivel%20de%20experiencia%20es%20${catchExperience}.%20Te%20envío%20el%20comprbante:`)

        mouseOverAndLeaveAnimation()
    }
    else{
        // attachment reminder
        hirePlan__textContainer.style.opacity = `10%`   
        specialText__hirePlan.classList.remove(`specialTextAnimation`)

        // remove button styles and links
        buttonWP.setAttribute(`href`, ``)
        buttonWP.classList.remove(`buttonWP__animation`)
        buttonWP.setAttribute(`href`, ``)
    }
})


// function which works as a hover animation and is executed in the event over this one
function mouseOverAndLeaveAnimation(){
    buttonWP.addEventListener(`mouseover`, e => {

        buttonWP.style.backgroundColor = `#0F3DDB`
        buttonWP.innerHTML = `<b class="size-l"> Enviar </b>`

    })
    
    buttonWP.addEventListener(`mouseleave`, e => {
    
        buttonWP.style.backgroundColor = `green`
        buttonWP.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        `
    })
}


