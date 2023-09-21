import { useState } from 'react'

const ChangeBackground = () => {
  const [cor, setCor] = useState('')

  return (
    <section className={`min-vh-100 ${cor} text-center`}>
      <p className='fw-bold fs-4'>Trocando a cor de fundo do meu app</p>
      <button
        type='button'
        className='btn btn-secondary mx-1'
        onClick={() => setCor('bg-blue')}
      >
        <i className='fa fa-retweet me-1' />
        Alterar a cor para azul
      </button>
      <button
        type='button'
        className='btn btn-secondary mx-1'
        onClick={() => setCor('bg-green')}
      >
        <i className='fa fa-retweet me-1' />
        Alterar a cor para verde
      </button>
      <button
        type='button'
        className='btn btn-secondary mx-1'
        onClick={() => setCor('bg-red')}
      >
        <i className='fa fa-retweet me-1' />
        Alterar a cor para vermelho
      </button>
    </section>
  )
}

export default ChangeBackground