import axios from 'axios'
import { useState } from 'react'

function CEP() {
  const [loading, setLoading] = useState(false)
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(undefined)

  function submit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then(({ data }) => setEndereco(data))
        .catch(er => setEndereco(undefined))
        .finally(() => setLoading(false))
    }, 1000)
  }

  return (
    <main>
      {loading && <div>Carregando...</div>}
      <form onSubmit={submit}>
        <input
          type='tel'
          placeholder='informe seu CEP'
          onChange={({ target: { value } }) => setCep(value)}
        />
        <input type='submit' value='Buscar CEP' />
      </form>

      {endereco && <section>
        <p>Logradouro {endereco.logradouro}</p>
        <p>Bairro {endereco.bairro}</p>
        <p>DDD {endereco.ddd}</p>
      </section>}
    </main>
  )
}

export default CEP