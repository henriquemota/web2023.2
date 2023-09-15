import { useState } from 'react'
import Item from '../components/Item'

function Cart() {
  const [compras, setCompras] = useState([])

  const data = [
    { nome: 'banana', preco: 7.5, foto: 'https://cdn.awsli.com.br/600x450/18/18885/produto/102523124/6ba7072878.jpg' },
    { nome: 'maçã', preco: 8.25, foto: 'https://urbanfarmipiranga.com.br/wp-content/uploads/2022/08/314-MACA-vermelha.jpg' },
    { nome: 'uva', preco: 9.75, foto: 'https://cdn.awsli.com.br/600x450/1294/1294025/produto/62683007/4bcd77e6c6.jpg' },
  ]

  return (
    <main>
      {data.map(({ foto, nome, preco }, ix) =>
        <Item
          key={ix}
          foto={foto}
          nome={nome}
          preco={preco}
          onClick={() => setCompras([...compras, { nome: nome, preco: preco }])}
        />
      )}

      <aside>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Preco</th>
            </tr>
          </thead>
          <tbody>
            {compras.map((el, ix) =>
              <tr key={ix}>
                <td>{ix + 1}</td>
                <td>{el.nome}</td>
                <td>{el.preco}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={100}>
                Total: {compras.map((el) => el.preco).reduce((atual, anteior) => Number(atual) + Number(anteior), 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </aside>
    </main>
  )
}

export default Cart

