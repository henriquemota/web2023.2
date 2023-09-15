// componente de item
function Item({ nome, foto, preco, onClick }) {

  return (
    <div>
      <img src={foto} title={nome} style={{ width: 180, height: 180 }} />
      <p>{nome}</p>
      <p>{preco}</p>
      <button type='button' onClick={onClick}>Incluir no carrinho</button>
    </div>
  )
}

export default Item