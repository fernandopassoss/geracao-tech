import React, { useState } from 'react';
import '../styles/Header.scss';
import Logo from './Logo';
import minicart from '../assets/mini-cart.svg';
import { NavLink } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

function Header({ativarStyleProdutos}) {
    const [ativarComponente, setAtivarComponente] = useState('home');

    const exibirComponente = (item) => {
        setAtivarComponente(item);
    };

    const location = useLocation();

    return (
        <div>
            <div className='navbar'>
                <div className="navbar-top">
                    <Logo />
                    <div className="search-box">
                        <input type="text" placeholder="Pesquisar..." />
                        <CiSearch className="search-icon" />
                    </div>
                    <div className='links'>
                        <a href='/' className='link' id='cadastre-se'>Cadastre-se</a>
                        <a href='/' className='link'>
                            <button className='botao'>Entrar</button>
                        </a>
                        <a href='/' className='link'>
                            <img src={minicart} alt="Mini Cart" />
                        </a>
                    </div>
                </div>

                <div className="navbar-bot">
                    <Link to='/' className='link' style={{textDecoration:'none'}}>
                        <div className={location.pathname === '/' ? 'ativo' : 'inativo'}>Home</div>
                        {location.pathname === '/' && <hr className='barra' />}
                    </Link>

                    <Link to='/produtos' className='link'   style={{textDecoration:'none'}}>
                        <div className={location.pathname === '/produtos' ? 'ativo' : 'inativo'}>Produtos</div>
                        {location.pathname === '/produtos' && <hr className='barra' />}
                    </Link>

                    <NavLink to='/' className='link' >
                        <div className={location.pathname === '/categorias' ? 'ativo' : 'inativo'}>Categorias</div>
                        {location.pathname === '/categorias' && <hr className='barra' />}
                    </NavLink>

                    <NavLink to='/' className='link'>
                        <div className={location.pathname === '/pedidos' ? 'ativo' : 'inativo'}>Meus Pedidos</div>
                        {location.pathname === '/pedidos' && <hr className='barra' />}
                    </NavLink>

                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
