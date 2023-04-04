// Variáveis

const screen1 = document.querySelector(".screen1") // Criando uma variável e atribuindo o valor dela igual ao input que coloquei no HTML e eu vinculo através do id inputNumber
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleTryClick)
document.addEventListener('keydown', enterForButton)


// função callback
  
  function handleTryClick(event) {    
      toggleScreen()
    }

function toggleScreen() {
  screen1.classList.toggle("hide") //Estou adicionando a classe hide, como não tinha antes o toggle adicionou
  screen2.classList.toggle("hide") //Estou removendo a classe hide, como já tinha antes o toggle removeu
}

function enterForButton(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}