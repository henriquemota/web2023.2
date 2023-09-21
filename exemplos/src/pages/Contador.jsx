import { useState } from 'react'

const Contador = () => {
  const [count, setCount] = useState(0)

  return (
    <section className='min-vh-100 text-center'>
      <p className='fw-bold fs-1'>{count}</p>
      <input
        type='button'
        value='incremento'
        className='btn btn-secondary mx-1'
        onClick={() => {
          setCount(Number(count) + 1)
        }}
      />
      <input
        type='button'
        value='decremento'
        className='btn btn-secondary mx-1'
        onClick={() => {
          setCount(Number(count) - 1)
        }}
      />
    </section>
  )
}

export default Contador