import { useState } from 'react'

const Calculadora = () => {
  const [operador, setOperador] = useState('')
  const [memoria, setMemoria] = useState('')
  const [valor, setValor] = useState('')
  const [operadores,] = useState([
    '9', '8', '7', '+',
    '6', '5', '4', '-',
    '3', '2', '1', '*',
    '0', '=', 'CE', '/',
  ])

  const handleButtoon = (el) => {
    switch (el) {
      case '9':
      case '8':
      case '7':
      case '6':
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
      case '0':
        setValor(valor.toString() + el.toString())
        break
      case '+':
      case '-':
      case '*':
      case '/':
        setMemoria(valor)
        setOperador(el)
        setValor('')
        break
      case '=':
        const resultado = memoria.toString() + operador.toString() + valor.toString()
        setValor(eval(resultado))
        break
      case 'CE':
        setMemoria('')
        setValor('')
        setOperador('')
        break
    }
  }

  return (
    <section className='min-vh-100 d-flex flex-column justify-content-center align-itens-center'>
      <div style={{ width: 300 }}>
        <input
          disabled
          value={valor}
        />
        <div className='row'>
          {operadores.map((el, ix) =>
            <div className='col-sm-3' key={ix}>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => handleButtoon(el)}
              >
                {el}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Calculadora