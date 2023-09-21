import { useState } from 'react'

const ContadorDeLetras = () => {
  const [palavra, setPalavra] = useState('')

  return (
    <section className='min-vh-100 text-center'>
      <p className='fw-bold fs-1'>{palavra} :: {palavra.length.toLocaleString('pt-BR')} letras</p>
      <input
        type='text'
        className='form-control'
        onChange={({ target: { value } }) => setPalavra(value)}
      // onChange={(el) => console.log(el.target.value, el.target)}
      />

    </section>
  )
}

export default ContadorDeLetras