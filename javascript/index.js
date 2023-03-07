// ***** librarySection  *****
// Links to connect librarySection with goToBuyPage__ShowEbooks.html
const goToBuyPage__ShowEbooks = document.getElementById(`goToBuyPage__ShowEbooks`)
const goToBuyPage__ShowExercisesLibrary = document.getElementById(`goToBuyPage__ShowExercisesLibrary`)

let showEbooksPage

goToBuyPage__ShowEbooks.addEventListener(`click`, e => {
    // change value
    showEbooksPage = true

    // save a new value
    localStorage.setItem(`showEbooksPage`, showEbooksPage)
})

goToBuyPage__ShowExercisesLibrary.addEventListener(`click`, e => {
    // change value
    showEbooksPage = false

    // save a new value
    localStorage.setItem(`showEbooksPage`, showEbooksPage)
})


// ***** frequentQuestions *****
const question__1 = document.getElementById(`question__1`)
const question__2 = document.getElementById(`question__2`)
const question__3 = document.getElementById(`question__3`)
const question__4 = document.getElementById(`question__4`)
const question__5 = document.getElementById(`question__5`)

// Answer Containers
const answer__1 = document.getElementById(`answer__1`)
const answer__2 = document.getElementById(`answer__2`)
const answer__3 = document.getElementById(`answer__3`)
const answer__4 = document.getElementById(`answer__4`)
const answer__5 = document.getElementById(`answer__5`)

// answer flags
let question1Open = false
let question2Open = false
let question3Open = false
let question4Open = false
let question5Open = false


// *** Question 1 ***
question__1.addEventListener(`click`, e =>{

    const answer1 = document.getElementById(`answer1`)

    // ! if question is closed
    if(question1Open == false){
        
        answer__1.classList.remove(`closeAnswer`)
        answer__1.classList.add(`openAnswer`)

        setTimeout(() => {
            answer1.style.display = `flex`

            setTimeout(() => {
                answer1.style.opacity = `100%`
            }, 100);

        }, 200);

        // The flag changes to the oposite value
        question1Open = true
    }

    // ! if it is open
    else{

        answer1.style.opacity = `0%`
        
        // double setTimeout
        setTimeout(() => {
            answer__1.classList.add(`closeAnswer`)
            answer1.style.display = `none`

            setTimeout(() => {
                answer__1.classList.remove(`openAnswer`)
            }, 100);

        }, 200);

        // the flag changes to the original value
        question1Open = false
    }

})

// *** Question 2 ***
question__2.addEventListener(`click`, e =>{

    const answer2 = document.getElementById(`answer2`)

    // ! if question is closed
    if(question2Open == false){
        
        answer__2.classList.remove(`closeAnswer`)
        answer__2.classList.add(`openAnswer`)

        setTimeout(() => {
            answer2.style.display = `flex`

            setTimeout(() => {
                answer2.style.opacity = `100%`
            }, 100);

        }, 200);

        // The flag changes to the oposite value
        question2Open = true
    }

    // ! if it is open
    else{

        answer2.style.opacity = `0%`
        
        // double setTimeout
        setTimeout(() => {
            answer__2.classList.add(`closeAnswer`)
            answer2.style.display = `none`

            setTimeout(() => {
                answer__2.classList.remove(`openAnswer`)
            }, 100);

        }, 200);

        // the flag changes to the original value
        question2Open = false
    }

})

// *** Question 3 ***
question__3.addEventListener(`click`, e =>{

    const answer3 = document.getElementById(`answer3`)

    // ! if question is closed
    if(question3Open == false){
        
        answer__3.classList.remove(`closeAnswer`)
        answer__3.classList.add(`openAnswer`)

        setTimeout(() => {
            answer3.style.display = `flex`

            setTimeout(() => {
                answer3.style.opacity = `100%`
            }, 100);

        }, 200);

        // The flag changes to the oposite value
        question3Open = true
    }

    // ! if it is open
    else{

        answer3.style.opacity = `0%`
        
        // double setTimeout
        setTimeout(() => {
            answer__3.classList.add(`closeAnswer`)
            answer3.style.display = `none`

            setTimeout(() => {
                answer__3.classList.remove(`openAnswer`)
            }, 100);

        }, 200);

        // the flag changes to the original value
        question3Open = false
    }

})

// *** Question 4 ***
question__4.addEventListener(`click`, e =>{

    const answer4 = document.getElementById(`answer4`)

    // ! if question is closed
    if(question4Open == false){
        
        answer__4.classList.remove(`closeAnswer`)
        answer__4.classList.add(`openAnswer`)

        setTimeout(() => {
            answer4.style.display = `flex`

            setTimeout(() => {
                answer4.style.opacity = `100%`
            }, 100);

        }, 200);

        // The flag changes to the oposite value
        question4Open = true
    }

    // ! if it is open
    else{

        answer4.style.opacity = `0%`
        
        // double setTimeout
        setTimeout(() => {
            answer__4.classList.add(`closeAnswer`)
            answer4.style.display = `none`

            setTimeout(() => {
                answer__4.classList.remove(`openAnswer`)
            }, 100);

        }, 200);

        // the flag changes to the original value
        question4Open = false
    }

})

// *** Question 5 ***
question__5.addEventListener(`click`, e =>{

    const answer5 = document.getElementById(`answer5`)

    // ! if question is closed
    if(question5Open == false){
        
        answer__5.classList.remove(`closeAnswer`)
        answer__5.classList.add(`openAnswer`)

        setTimeout(() => {
            answer5.style.display = `flex`

            setTimeout(() => {
                answer5.style.opacity = `100%`
            }, 100);

        }, 200);

        // The flag changes to the oposite value
        question5Open = true
    }

    // ! if it is open
    else{

        answer5.style.opacity = `0%`
        
        // double setTimeout
        setTimeout(() => {
            answer__5.classList.add(`closeAnswer`)
            answer5.style.display = `none`

            setTimeout(() => {
                answer__5.classList.remove(`openAnswer`)
            }, 100);

        }, 200);

        // the flag changes to the original value
        question5Open = false
    }

})
