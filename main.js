const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Não',
  'De jeito nenhum',
  'Infelizmente não',
  'Claro que não',
  'Em hipótese alguma',
  'Não mesmo',
  'De jeito nenhum',
  'Talvez em outra hora',
  'Na verdade não',
  'Obrigado, mas não',
  'Agora não',
  'Sim',
  'Certamente',
  'Sem dúvida',
  'Com certeza',
  'Com toda a certeza'
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
