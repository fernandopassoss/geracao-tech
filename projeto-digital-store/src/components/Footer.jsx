import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='coluna1'>
                    <img src={logo}></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed do eiusmod tempor<br />
                        incididunt ut labore et dolore.
                    </p>
                    <div className='icones'>
                        <img src={facebook}></img>
                        <img src={instagram}></img>
                        <img src={twitter}></img>
                    </div>
                </div>
                <div className='coluna2'>
                    <p className='titulo'>
                        Informação
                    </p>
                    <div className='items-coluna2'>
                        <ul>
                            <li>
                                Sobre Drip Store
                            </li>
                            <li>
                                Segurança
                            </li>
                            <li>
                                Wishlist
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Trabalhe Conosco
                            </li>
                            <li>
                                Meus Pedidos
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='coluna3'>
                    <p className='titulo'>
                        Categorias
                    </p>
                    <div className='items-coluna3'>
                        <ul>
                            <li>
                                Camisetas
                            </li>
                            <li>
                                Calças
                            </li>
                            <li>
                                Bonés
                            </li>
                            <li>
                                Headphones
                            </li>
                            <li>
                                Tênis
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='coluna4'>
                    <p className='titulo'>
                        Contato
                    </p>
                    <div className='items-coluna4'>
                        <ul>
                            <li>
                                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                            </li>
                            <li>
                                (85) 3051-3411
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bot'>
                <hr className='barra'/>
                <p>
                    @ 2022 Digital College
                </p>
            </div>
            
        </div>
    )
}

export default Footer
