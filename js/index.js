chamarConselho()

const elementConselho = document.getElementById("conselho")
const elementIdDoConselho = document.getElementById("titulo")

let conselho
let idDoConselho

async function chamarConselho() {
    let url = "https://api.adviceslip.com/advice"
    let request = await fetch(url)
    let json = await request.json()
    idDoConselho = await json.slip.id
    conselho = await json.slip.advice
    elementIdDoConselho.innerHTML = `ADVICE #${idDoConselho}`
    elementConselho.innerHTML = `"${conselho}"`
}

const botao = document.getElementById("button")

botao.addEventListener("click", () => {
    chamarConselho();
})
