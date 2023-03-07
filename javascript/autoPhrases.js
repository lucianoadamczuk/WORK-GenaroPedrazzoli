// Array with famous phrases
const phrasesArray = [
    `La verdadera motivación procede de trabajar en cosas que nos importan.`, 
    `Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso.`, 
    `Si te caíste ayer, levántate hoy.`, 
    `Siempre parece imposible hasta que se hace.`, 
    `No cuentes los días, haz que los días cuenten.`, 
    `Si la oportunidad no llama, construye una puerta.`, 
    `Piensa, sueña, cree y atrévete.`, 
    `Nunca se es demasiado viejo para fijar otra meta o para soñar un nuevo sueño.`,
    `El hombre que mueve montañas comienza cargando pequeñas piedras.`,
    `Aprovecha las oportunidades que aparezcan, donde quiera que estén.`,
    `Nunca es demasiado tarde para ser lo que podrías haber sido.`, 
    `Los dos guerreros más poderosos son la paciencia y el tiempo.`,
    `El secreto de tu éxito está determinado por tu agenda diaria.`, 
    `Apunta a la luna. Si fallas, podrías dar a una estrella.`,
    `No tienes poder sobre los acontecimientos exteriores pero sí sobre tu mente. Aprende esto, y encontrarás tu fuerza.`,
    `Intenta y falla, pero nunca falles en intentarlo.`,
    `Háblate a ti mismo como harías con alguien a quien amas.`,
    `La mejor manera para empezar es callándote y empezar a hacer.`,
    `Es la capacidad de resistir a los errores lo que a menudo conduce a un mayor éxito.`, 
    `No pares cuando estés cansado. Para cuando hayas terminado.`,
    `La única manera de encontrar los límites de lo posible es ir más allá de lo imposible.`,
    `Tienes que esperar cosas de ti mismo antes de poder hacerlas.`,
    `El secreto para salir adelante es comenzar.`, 
    `Nadie se deshace de un hábito o de un vicio tirándolo de una vez por la ventana; hay que sacarlo por la escalera, peldaño a peldaño.`   
]

// Array with their authors
const authorsArray = [`Sheryl Sandberg`,
`Bill Cosby`, 
`H. G. Wells`, 
`Nelson Mandela`, 
`Muhammad Ali`, 
`Milton Berle`, 
`Walt Disney`, 
`C. S. Lewis`, 
`Confucio`,
`Lakshmi Mittal`,
`George Eliot`,
` León Tolstói`,
`John C. Maxwell`,
`William Clement Stone`,
`Marco Aurelio`,
`Brene Brown`,
`Jared Leto`,
`Walt Disney`,
`J. K. Rwolling`,
`Marilyn Monroe‍`,
`Arthur C. Clarke`,
`Michael Jordan`,
`Mark Twain`,
`Mark Twain`,
]

// This id has to have the texts that are going to change
let text__autoPhrase_fill = document.getElementById(`text__autoPhrase_fill`)
let author__autoPhrase_fill = document.getElementById(`author__autoPhrase_fill`)

function playPhrasesReproducer(){
    
    // Random number generator with the lenght of the array
    let phraseNumber = Math.floor(Math.random() * (phrasesArray.length))

    text__autoPhrase_fill.style.transition = `2s`
    author__autoPhrase_fill.style.transition = `2s`

    // add phrase, author and remove opacity
    setTimeout(() => {
        text__autoPhrase_fill.textContent = phrasesArray[phraseNumber]
        text__autoPhrase_fill.style.opacity = `1`

        author__autoPhrase_fill.textContent = authorsArray[phraseNumber]
        author__autoPhrase_fill.style.opacity = `1`
    }, 1000);

    // add opacity
    setTimeout(() => {
        text__autoPhrase_fill.style.opacity = `0`
        author__autoPhrase_fill.style.opacity = [0]
    }, 6000);
}

playPhrasesReproducer()

setInterval(() => {
    playPhrasesReproducer()
}, 7000);