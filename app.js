const btnStart = document.getElementById("btnStart")
const btnGuess = document.getElementById("btnGuess")
const btnRestart = document.getElementById("btnRestart")
const btnExit = document.getElementById("btnExit")
const gameZone = document.getElementById("gameZone")
// const buttons = document.getElementById("buttons")
const results = document.getElementById("results")
const parrNumber = document.getElementById("parrNumber")
const inputNumber = document.getElementById("inputNumber")
const infoIntentos = document.getElementById("infoIntentos")
let number = 0
let intentos = 0
let lastGuess = 0
let auxRes = ""

const startGame = () => {
    intentos = 10
    gameZone.hidden = false
    inputNumber.disabled = false
    btnStart.disabled = true
    btnGuess.hidden = false
    btnRestart.hidden = true
    btnExit.hidden = true
    results.innerHTML = ""
    infoIntentos.innerHTML = "You have 10 tries to guess the number i'm thinking of."
    number = Math.round(Math.random() * (100 - 1) + 1)
    // parrNumber.innerHTML = number
}

const deleteInput = () => {
    inputNumber.value = ""
}

const guessNumber = () => {
    results.innerHTML = ""
    lastGuess = parseInt(inputNumber.value)
    // console.log(intentos)

    if(inputNumber.value === ""){
        alert("I don't know how to read minds yet... for now. You have to enter a number.")
        inputNumber.focus()
        results.innerHTML = auxRes
    }
    if(parseInt(inputNumber.value) === number){
        results.innerHTML = `<p class="resultado">Congratulations! You're guess the number.</p>`
        inputNumber.disabled = true
        btnGuess.hidden = true
        btnRestart.hidden = false
        btnExit.hidden = false
    }
    if(parseInt(inputNumber.value) > number){
        results.innerHTML = ""
        results.innerHTML = `<p class="resultado">Oops... you went to high.</p>
                            <p>Remaining tries: ${intentos-1}</p>
                            <p>Previous try: ${lastGuess}</p>`
        auxRes = results
        intentos -= 1

    }
    if(parseInt(inputNumber.value) < number){
        results.innerHTML = ""
        results.innerHTML = `<p class="resultado">Mmm... your number is low.</p>
                            <p>Remaining tries: ${intentos-1}</p>
                            <p>Previous try: ${lastGuess}</p>`
        auxRes = results.innerHTML
        console.log(auxRes)
        intentos -= 1
    }
    if(intentos === 0){
        gameOver()
    }
    console.log(intentos)
    deleteInput()
}

const exitGame = () => {
    gameZone.hidden = true
    btnRestart.hidden = true
    btnExit.hidden = true
    btnStart.disabled = false
    number = 0
}

const gameOver = () => {
    results.innerHTML = `<p class="resultado">Oh... You couldn't guess the number. Good luck for the next game.</p>`
    inputNumber.disabled = true
    btnGuess.hidden = true
    btnRestart.hidden = false
    btnExit.hidden = false
}
