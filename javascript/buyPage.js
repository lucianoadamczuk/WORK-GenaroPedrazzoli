

const buyPage__ebooks = document.getElementById(`buyPage__ebooks`)
const buyPage__exercisesLibrary = document.getElementById(`buyPage__exercisesLibrary`)

// if the value collected in index.js...
if(localStorage.getItem(`showEbooksPage`) == `true` ){
    buyPage__ebooks.style.display = `flex`
}
else{
    buyPage__exercisesLibrary.style.display = `flex`
}
