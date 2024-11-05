import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.scss'
import Logo from './Logo'
import SegundaLogo from './SegundaLogo';

function Header({}) {


    const [ativarComponente, setAtivarComponente] = useState('home')
    
    const exibirComponente = (item) =>{
        setAtivarComponente(item)
    }


    return (
        <div>
            
            <div className='header'>
                <NavLink   onClick={()=>exibirComponente('home')} >Home</NavLink>
                <NavLink  onClick={()=>exibirComponente('produtos')} >Produtos</NavLink>
                <NavLink>Categorias</NavLink>
                <NavLink>Meus pedidos</NavLink>
            </div>

            {
                ativarComponente === 'home' && (
                    <div className='imagem'>
                        <Logo />
                    </div>

                )
               
            }
            {
                ativarComponente === 'produtos' && (
                    <div className='imagem'>
                        <SegundaLogo/>
                    </div>
                )
            }
        </div>

    )
}

export default Header
