const imc = function () {
  const e1 = document.getElementsByTagName('input')
  const e2 = document.getElementsByTagName('div')

  const peso = parseInt(e1[0].value)
  const altura = parseFloat(e1[1].value)

  const imc = (peso / (altura * altura)).toFixed(1)

  let msg = ''
  if (imc < 18.5) msg = 'Abaixo do peso'
  else if (imc >= 18.5 && imc < 25) msg = 'Peso normal'
  else if (imc >= 25 && imc < 30) msg = 'Acima do peso'
  else if (imc >= 30 && imc < 35) msg = 'Obesidade I'
  else if (imc >= 35 && imc < 40) msg = 'Obesidade II'
  else msg = 'Obesidade III'

  // Menor do que 18,5 	Abaixo do peso
  // Entre 18,5 e 24,9 	Peso normal
  // Entre 25 e 29,9 	Acima do peso (sobrepeso)
  // Entre 30 e 34,9 	Obesidade I
  // Entre 35 e 39,9 	Obesidade II
  // Maior do que 40 	Obesidade III

  e2[0].innerHTML = `<h1>Seu IMC para o peso ${peso} e altura ${altura} é ${imc} ${msg}</h1>`
}