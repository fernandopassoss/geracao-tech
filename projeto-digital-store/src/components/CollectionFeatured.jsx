import React from 'react'
import '../styles/CollectionFeatured.scss'
import collection1 from '../public/collection-1.png'
import collection2 from '../public/collection-2.png'
import collection3 from '../public/collection-3.png'
import frame10 from '../public/Frame 10.png'
import frame11 from '../public/Frame 11.png'
import frame13 from '../public/Frame 13.png'
import frame14 from '../public/Frame 14.png'

function CollectionFeatured() {
    return (
        <div>

            <div className='colecao1-cards'>
                <div >
                    <h2 id='texto'>
                        Coleções em destaque
                    </h2>
                </div>
                <div className='colecao'>

                    <div>
                        <img src={collection1} className='imgcolecao'>

                        </img>
                        <div className='infos1'>
                            <p className='porcentagem'>
                                30% OFF
                            </p>
                            <br />
                            <button className='botao1'>
                                Comprar
                            </button>
                        </div>


                    </div>


                    <div>
                        <img src={collection2} className='imgcolecao'></img>
                        <div className='infos2'>
                            <p className='porcentagem'>
                                30% OFF
                            </p>
                            <br />
                            <button className='botao2'>
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div>
                        <img src={collection3} className='imgcolecao'>
                        </img>
                        <div className='infos3'>
                            <p className='porcentagem'>
                                30% OFF
                            </p>
                            <br />
                            <button className='botao3'>
                                Comprar
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <div className='colecao2-botoes'>
                <div >
                    <h2 id='texto2'>
                        Coleções em destaque
                    </h2>
                </div>
                <div className='colecao2'>
                    <img src={frame10} className='colecao2-img1'></img>

                    <img src={frame11} className='colecao2-img2'></img>

                    <img src={frame11} className='colecao2-img3'></img>

                    <img src={frame13} className='colecao2-img4'></img>

                    <img src={frame14} className='colecao2-img5'></img>

                </div>
                <div className='colecao2-textos'>
                    <p className='colecao2-texto'>
                        Camisetas
                    </p>
                    <p className='colecao2-texto' id="colecao2-texto2">
                        Calças
                    </p>
                    <p className='colecao2-texto' id='colecao2-texto3'>
                        Bonés
                    </p>
                    <p className='colecao2-texto'>
                        Headphones
                    </p>
                    <p className='colecao2-texto'>
                        Tênis
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CollectionFeatured
