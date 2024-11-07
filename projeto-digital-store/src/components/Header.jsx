import React, { useState } from 'react'
import '../styles/Header.scss'
import Logo from './Logo'
import minicart from '../assets/mini-cart.svg'
import { Nav, NavLink } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import Slideshow from './Slideshow';
import CollectionFeatured from './CollectionFeatured';
import ProductListing from './ProductListing';


function Header() {

      
    const [ativarComponente, setAtivarComponente] = useState('home');

    const exibirComponente = (item) => {
        setAtivarComponente(item);
    }


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
                        <a href='#' className='link' id='cadastre-se'>
                            Cadastre-se
                        </a>
                        <a href='#' className='link'>
                            <button className='botao'>
                                Entrar
                            </button>
                        </a>
                        <a href='#' className='link'>
                            <img src={minicart}>
                            </img>
                        </a>
                    </div>

                </div>


                <div className="navbar-bot">
                    <NavLink to='/' className='link' onClick={() => exibirComponente('home')} id="myButton">
                        Home


                        {
                            ativarComponente === 'home' && (
                                <div>
                                    
                                    <hr className='barra'></hr>

                                </div>

                            )
                        }
                    </NavLink>
                    <NavLink to='/' className='link'  onClick={()=>exibirComponente('produtos')}>
                        Produtos
                        {
                            ativarComponente === 'produtos' && (
                                <div>
                                    <hr className='barra'></hr>

                                </div>

                            )
                        }
                    </NavLink>
                    <NavLink to='/' >
                        Categorias

                    </NavLink>
                    <NavLink to='/'>
                        Meus Pedidos

                    </NavLink>
                </div>


            </div>
            <div>
                {
                    ativarComponente === 'home' && (
                        <div>
                            <Slideshow />
                            <CollectionFeatured />
                        </div>

                    )
                }
                {
                    ativarComponente === 'produtos' && (
                        <div>
                            <ProductListing/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header
