const button__exercisesLibrary_enter = document.getElementById(`button__exercisesLibrary_enter`)
const input__exercisesLibrary_enter = document.getElementById(`input__exercisesLibrary_enter`)
const enterToExercisesLibrary = document.getElementById(`enterToExercisesLibrary`)
const transitionPage = document.getElementById(`transitionPage`)
const countDown = document.getElementById(`countDown`)
const libraryExercises = document.getElementById(`libraryExercises`)

// ! password
const password = 123

button__exercisesLibrary_enter.addEventListener(`click`, e => {

    if(input__exercisesLibrary_enter.value == password){

        // html containers transition animations
        enterToExercisesLibrary.style.transition = `1s`
        enterToExercisesLibrary.style.opacity = `0%`
        transitionPage.style.display = `flex`

        setTimeout(() => {
            enterToExercisesLibrary.style.display = `none`
            transitionPage.style.opacity = `100%`

            // show numbers from 10 to 0 on screen
            let countDownNumber = 11
            let timer = setInterval(() => {
                countDownNumber--
                countDown.innerHTML = `<p class="size-xl">${countDownNumber}</p>`

                if(countDownNumber == 0){
                    clearInterval(timer)
                    const spinner = document.getElementById(`spinner`)
                    spinner.style.transition = `1s`
                    spinner.style.opacity = `0%`
                    countDown.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    `
                }

                // html containers transition animations
                setTimeout(() => {
                    setTimeout(() => {
                        transitionPage.style.opacity = `0%`
                    }, 1000);

                    transitionPage.style.display = `none`
                    libraryExercises.style.opacity = `100%`
                    // i had to add overflow hidden due to the scroll that videos generate and with this linea i remove it
                    libraryExercises.style.overflowY = `scroll`
                }, 10000);
                
            }, 1000);

        }, 1000);

    }

})


// The library
// * the different sections
const chestExercises = document.getElementById(`chestExercises`)
const backExercises = document.getElementById(`backExercises`)
const bicepsExercises = document.getElementById(`bicepsExercises`)
const tricepsExercises = document.getElementById(`tricepsExercises`)
const shouldersExercises = document.getElementById(`shouldersExercises`)
const legsExercises = document.getElementById(`legsExercises`)
const allBoxesContainer = document.getElementById(`allBoxesContainer`)


// ! Databases of exercise names 
const database__chest = [`Press Banco Plano con barra`, `Press plano con mancuernas`, `Aperturas en banco plano`, `press plano con un brazo en isometria`, `Press plano con mancuerna a un brazo`, `Empuje en maquina de pecho`, `Flexiones inclinadas sobre banco`, `Press inclinado con barra`, `Press inclinado con mancuernas`, `Aperturas en banco inclinado`, `Press inclinado con disco`, `Press declinado con barra`, `Cruce de poleas horizontal`, `Cruce de poleas descendentes`, `Cruce de poleas ascendentes`, `Flexiones de brazos`, `Flexiones declinadas`, `Cruce de poleas`, `Around the world`]
const database__back = [`Jalon al pecho prono`, `Jalon al pecho supino`, `Remo gironda agarre v`, `Remo gironda con barra supino`, `Remo gironda con barra prono`, `Remo gironda a un brazo`, `Remo serrucho`, `Remo con mancuernas`, `Remo con mancuernas supino`, `Remo barra T`, `Dominadas pronas`, `Pullover con soga`, `Meadows rows`, `Rack chins`, `Remo australiano`, `Remo bajo en polea con barrita`, `Remo bajo en polea a un brazo`, `Remo con barra prono`, `Remo con barra supino`, `Remo en banco inclinado con mancuernas`, `Remo en punta`, `Pullover con soga`]
const database__biceps = [`Chinups`, `Curl alternado con mancuernas`, `Curl araña con mancuernas`, `Curl inclinado con mancuernas`, `Curl concentrado en polea baja`, `Curl de biceps con barra`, `Curl del mesero`, `Curl en polea baja con barrita`, `Curl en polea baja unilateral`, `Curl en scott con barra`, `Curl en scott con mancuerna`, `Curl martillo alternado`, `Curl martillo con soga`, `Curl martillo en polea`, `Curl martillo en Scott`, `Curl martillo`, `Curl en polea baja unilateral codo atras`, `Dead curl`]
const database__triceps = [`Extension con soga`, `Extencion con soga a un brazo`, `Extension con soga trasnuca`, `Extencion con soga trasnuca a un brazo`, `Copa a dos manos con soga`, `Extencion katana`, `Patada de triceps en polea`, `Extencion en polea a un brazo`, `Press frances en polea`, `Press frances con mancuerna a un brazo`, `Press frances con mancuernas`, `Copa a dos manos`, `Copa a una mano`, `Patada de triceps con mancuerna`, `Extencion en TRX`, `Press frances con barra prono`, `Press frances con barra supino`, `Extencion de triceps con barrita prono`, `Extencion de triceps con barrita supino`, `Press cerrado`, `Rompe craneos`, `Flexiones diamante`, `Extencion con soga en banco inclinado`, `Fondo en banco`]
const database__shoulders = [`Elevacion frontal a un brazo con mancuerna`, `Elevacion frontal con disco girando`, `Elevacion frontal con disco`, `Elevacion frontal en polea de espalda`, `Elevacion frontal en polea de frente`, `Elevacion lateral con inclinacion`, `Elevacion lateral con isometria`, `Elevacion lateral sentado con mancuerna a un brazo`, `Elevacion lateral en polea`, `Elevacion lateral y frontal en simultaneo`, `Elevaciones frontales con mancuernas`, `Elevaciones laterales acostado con banda`, `Elevaciones laterales con mancuernas`, `Elevaciones laterales sentado con mancuernas`, `Facepull`, `Posterior en polea con soga a un brazo`, `Posterior en TRX`, `Press Arnold`, `Press de hombros en maquina`, `Press militar con barra parado`, `Press militar con mancuernas parado`, `Press militar con mancuernas sentado`, `Elevaciones de pajaro agachado`, `Vuelo de pajaro en banco inclinado`, `Vuelos de pajaro sentado`]
const database__legs = [`Sentadilla copa con mancuerna`, `Estocadas fijas con mancuernas`, `Estocadas alternadas con mancuernas`, `Sentadilla con salto`, `Sentadilla frontal con mancuernas`, `Sentadilla sumo con mancuernas en steps`, `Peso muerto rumano con mancuernas`, `Peso muerto a una pierna con mancuernas`, `Sentadilla bulgara con mancuernas`, `Hipthrust con mancuernas`, `Hipthrust a una pierna`, `Patada de rana`, `Estocadas caminando con mancuernas`, `Estocadas caminando con barra`, `Sentadilla con barra`, `Peso muerto rumano con barra`, `Peso muerto convencional`, `Peso muerto sumo con barra`, `Prensa`, `Silla de cuadriceps`, `Curl isquio acostado`, `Pantorrillas en prensa`, `Hipthrust con barra`, `Pantorrillas en maquina`]


// * function to hide all the sections
function hideContainers(){
    chestExercises.style.display = `none`
    backExercises.style.display = `none`
    bicepsExercises.style.display = `none`
    tricepsExercises.style.display = `none`
    shouldersExercises.style.display = `none`
    legsExercises.style.display = `none`
}
let chestVideosAreVisible = true

// * function to create the information in the DOM
navLinks[0].addEventListener(`click`, () => {    
    hideContainers()

    if(chestVideosAreVisible == true){
        chestExercises.style.display = `flex`
        chestExercises.innerHTML = `<p> Abierto </p>`
        chestVideosAreVisible = false
    }
    else{
        chestExercises.style.display = `none`
        chestExercises.innerHTML = ``
        chestVideosAreVisible = true
    }
})

navLinks[1].addEventListener(`click`, () => {
    hideContainers()

})

navLinks[2].addEventListener(`click`, () => {
    hideContainers()

})

navLinks[3].addEventListener(`click`, () => {
    hideContainers()

})

navLinks[4].addEventListener(`click`, () => {
    hideContainers()

})

navLinks[5].addEventListener(`click`, () => {
    hideContainers()
    legsExercises.style.display = `flex`

})













