import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.scss'
import Logo from './Logo'

function Header() {

    
  return (
    <div>
        <div className='header'>
        <NavLink>Home</NavLink>
        <NavLink>Produtos</NavLink>
        <NavLink>Categorias</NavLink>
        <NavLink>Meus pedidos</NavLink>
        </div>

        <div className='imagem'>
            <Logo/>
        </div>

    </div>

  )
}

export default Header
