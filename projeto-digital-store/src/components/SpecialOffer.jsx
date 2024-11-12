import React from 'react'
import '../styles/SpecialOffer.scss'
import ellipse11 from '../public/Ellipse11.png'
import laye1 from '../public/Laye 1.png'

function SpecialOffer() {
    return (
        <div className='specialoffer'>
            <div className='banner'>
                <img src={ellipse11} id='ellipse'></img>
                <img src={laye1} id='laye1'></img>
            </div>
            <div className='infos'>
                <p id='infos-ofertas'>
                    Ofertas especial
                </p>
                <h1 id='infos-titulo'>
                    Air Jordan edição de <br></br>
                    colecionador
                </h1>
                <p id='infos-texto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br></br>
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br></br>
                    aliquip
                </p>
                <button id='infos-botao'>Ver Oferta</button>
            </div>
        </div>
    )
}

export default SpecialOffer
