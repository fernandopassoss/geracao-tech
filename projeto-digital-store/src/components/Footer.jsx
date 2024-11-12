import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
    return (
        <div className='footer' >
            <div className='footer-top'>
                <div className='coluna1'>
                    <ul className='lista1'>
                        <li>
                            <img src={logo}></img>
                        </li>
                        <li id='textoFooter'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur<br />
                                adipiscing elit, sed do eiusmod tempor<br />
                                incididunt ut labore et dolore.
                            </p>
                        </li>
                        <li>
                            <div className='icones'>
                                <img src={facebook}></img>
                                <img src={instagram}></img>
                                <img src={twitter}></img>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='coluna2'>

                    <div className='items-coluna2'>
                        <ul className='lista2'>
                            <li>
                                <p className='titulo'>
                                    Informação
                                </p>
                            </li>
                            <li className='clicavel'>
                                Sobre Drip Store
                            </li>
                            <li  className='clicavel'>
                                Segurança
                            </li >
                            <li  className='clicavel'>
                                Wishlist
                            </li>
                            <li  className='clicavel'>
                                Blog
                            </li>
                            <li  className='clicavel'>
                                Trabalhe Conosco
                            </li>
                            <li  className='clicavel'>
                                Meus Pedidos
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='coluna3'>

                    <div className='items-coluna3'>
                        <ul className='lista3'>
                            <li>
                                <p className='titulo'>
                                    Categorias
                                </p>
                            </li>

                            <li  className='clicavel'>
                                Camisetas
                            </li>
                            <li  className='clicavel'>
                                Calças
                            </li>
                            <li  className='clicavel'>
                                Bonés
                            </li>
                            <li  className='clicavel'>
                                Headphones
                            </li>
                            <li  className='clicavel'>
                                Tênis
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='coluna4'>

                    <div className='items-coluna4'>
                        <ul className='lista4'>
                            <li>
                                <p className='titulo'>
                                    Contato
                                </p>
                            </li>
                            <li>
                                Av. Santos Dumont, 1510 - 1 <br></br>
                                andar - Aldeota, Fortaleza - <br></br>
                                CE, 60150-161
                            </li>
                            <li>
                                (85) 3051-3411
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='footer-bot'>

                <hr className='barraFooter' />
                <p className='digitalCollegeFooter'>
                    @ 2022 Digital College
                </p>
            </div>



        </div>
    )
}

export default Footer
