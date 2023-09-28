import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataProducts } from '../data/fake'

const Product = () => {
  const [data, setData] = useState()
  const { id } = useParams()

  useEffect(() => {
    const product = dataProducts.find(e => Number(e.id) === Number(id))
    setData(product)
  }, [id])

  return (
    <div>
      <h1>Produto {id}</h1>
      <p className='fw-bold m-0'>Nome: {data?.name}</p>
      <p className='fw-bold m-0'>Preço: {data?.price.toLocaleString('pt-BR')}</p>
    </div>
  )
}

export default Product
