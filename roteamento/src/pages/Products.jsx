import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { dataProducts } from '../data/fake'

const Products = () => {
  const { pathname } = useLocation()

  return (
    <div>
      Products

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dataProducts.map((el, ix) => (
            <tr key={ix}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.price.toLocaleString('pt-BR')}</td>
              <td>
                <Link to={pathname.concat('/', el.id)}>
                  <i className='fa fa-search' />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
