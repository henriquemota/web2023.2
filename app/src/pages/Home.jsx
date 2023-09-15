import React from 'react'

function Home() {

  const data = [
    { nome: 'joao', idade: 30, },
    { nome: 'maria', idade: 20, },
    { nome: 'pedro', idade: 28, },
    { nome: 'ana', idade: 26, },
  ]

  return (
    <React.Fragment>
      <h1>Todas as pessoas</h1>
      {data.map((el, ix) => <p key={ix}>Nome {el.nome} e idade {el.idade}</p>)}
      <h1>Pessoas maiores de 26 anos</h1>
      {data.filter((el) => Number(el.idade) > 26).map((el, ix) => <p key={ix}>Nome {el.nome} e idade {el.idade}</p>)}
      <h1>Pessoa de nome maria</h1>
      <p>Maria foi localizada {data.find((el) => el.nome.toLowerCase() === 'maria')?.nome} </p>
    </React.Fragment>
  )
}

export default Home