import React, { memo, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <main className='min-vh-100'>
      <header className='bg-dark text-white'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/products'>Products</Link></li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Carregando...</div>}>
        <div className='container'>
          <Outlet />
        </div>
      </Suspense>
      <footer className='bg-dark text-white'>
        Página pessoal do Henrique Mota
      </footer>
    </main>
  )
}

export default memo(Public)
