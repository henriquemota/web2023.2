const cart = []

function loadData() {
  // recupera da interface a <ul></ul> de lista de prodrutos
  const lp = document.getElementById('lista_produtos')
  lp.innerHTML = ""

  // objeto de requisicao
  axios
    .get('./loja.json') //realiza a requisicao http get para buscar o recurso
    .then(function (res) { // executa a funcao de callback recebendo o objeto de resposta
      const { data } = res // desestrutura a variavel data a partir do objeto de resposta

      // itera sobre o conjunto de daodos e injeta os dados da requisicao
      data.forEach(function (e) {
        lp.innerHTML += `
            <li class="py-3">
              <img class="img-fluid" style="height: 48px" src="${e.img}" />
              <p>${e.nome}</p>
              <p>R$ ${e.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <button 
                type="button" 
                class="btn btn-secondary"
                onClick="addCart({id: ${e.id}, nome: '${e.nome}', preco: ${e.preco}})"
              >
                Incluir no carrinho
              </button>
            </li>
        `
      })

    })
    .catch(function (error) {
      console.log(error)
    })
}

function loadCart() {
  const tbody = document.getElementById('cart')
  tbody.innerHTML = ""
  cart.forEach(function (e, i) {
    tbody.innerHTML += `
      <tr>
        <td>${e.nome}</td>
        <td>R$ ${e.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        <td>
          <input type="button" class="btn btn-danger" value="Excluir" onClick="removeItem(${i})" />
        </td>
      </tr>  
    `
  })
}

function addCart(produto) {
  cart.push(produto)
  loadCart()
}

function removeItem(index) {
  if (confirm('Deseja realmente excluir?')) {
    cart.splice(index, 1)
    loadCart()
  }
}