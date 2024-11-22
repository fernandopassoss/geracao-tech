import React, { useState } from 'react';
import '../styles/Header.scss';
import Logo from './Logo';
import minicart from '../assets/mini-cart.svg';
import { NavLink } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import Slideshow from './Slideshow';
import CollectionFeatured from './CollectionFeatured';
import Section from './Section';
import {Navigate} from 'react-router-dom';

function Header() {
    const [ativarComponente, setAtivarComponente] = useState('home');

    const exibirComponente = (item) => {
        setAtivarComponente(item);
    };

    


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
                    <NavLink to='/' className='link' onClick={() => exibirComponente('home')}>
                        <div className={ativarComponente === 'home' ? 'ativo' : 'inativo'}>Home</div>
                        {ativarComponente === 'home' && <hr className='barra' />}
                    </NavLink>

                    <NavLink to='/' className='link' onClick={() => exibirComponente('produtos')} >
                        <div className={ativarComponente === 'produtos' ? 'ativo' : 'inativo'}>Produtos</div>
                        {ativarComponente === 'produtos' && <hr className='barra' />}
                    </NavLink>

                    <NavLink to='/' className='link' onClick={() => exibirComponente('categorias')}>
                        <div className={ativarComponente === 'categorias' ? 'ativo' : 'inativo'}>Categorias</div>
                        {ativarComponente === 'categorias' && <hr className='barra' />}
                    </NavLink>

                    <NavLink to='/' className='link' onClick={() => exibirComponente('pedidos')}>
                        <div className={ativarComponente === 'pedidos' ? 'ativo' : 'inativo'}>Meus Pedidos</div>
                        {ativarComponente === 'pedidos' && <hr className='barra' />}
                    </NavLink>
                </div>
            </div>

            <div>
                {ativarComponente === 'home' && (
                    <div style={{backgroundColor:'#F9F8FE'}}>
                        <Section ativarComponente={ativarComponente}/>
                    </div>
                )}
                {ativarComponente === 'produtos' && (
                    <div>
                        <Navigate to="/produtos"/>
                       
                    </div>
                )
                }

                {ativarComponente === 'categorias' && (
                    <div>
                        <Slideshow />
                        <CollectionFeatured />
                    </div>
                )
                }

                {ativarComponente === 'pedidos' && (
                    <div>
                        <Slideshow />
                        <CollectionFeatured />
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Header;
