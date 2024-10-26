import React, { useState } from 'react'
import '../styles/Header.scss'
import Logo from './Logo'
import minicart from '../assets/mini-cart.svg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Nav, NavLink } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {

    return (
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


            <nav className="navbar-bot">
                <div className='links'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/'>
                        Produtos
                    </NavLink>
                    <NavLink to='/'>
                        Categorias
                    </NavLink>
                    <NavLink to='/'>
                        Meus Pedidos
                    </NavLink>
                </div>

            </nav>


        </div>
    )
}

export default Header
