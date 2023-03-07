const nav__mobileButton = document.getElementById(`nav__mobileButton`)
const nav__linksContainer = document.getElementById(`nav__linksContainer`)
const navLinks = document.querySelectorAll(`.navLink`)

nav__mobileButton.addEventListener(`click`, e => {
    nav__linksContainer.classList.toggle(`showNav`)
})

navLinks.forEach(link => {
    link.addEventListener(`click`, e => {
        nav__linksContainer.classList.remove(`showNav`)
    })
});

