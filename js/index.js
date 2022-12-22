chamarConselho()

const elementConselho = document.getElementById("conselho")
const elementIdDoConselho = document.getElementById("titulo")

let conselho
let idDoConselho

async function chamarConselho() {
    let url = "https://api.adviceslip.com/advice"
    let x = await fetch(url)
    let y = await x.json()
    idDoConselho = await y.slip.id
    conselho = await y.slip.advice
    elementIdDoConselho.innerHTML = `ADVICE #${idDoConselho}`
    elementConselho.innerHTML = `"${conselho}"`
}

const botao = document.getElementById("button")

botao.addEventListener("click", () => {
    chamarConselho();
})
