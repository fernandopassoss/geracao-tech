import React from 'react'
import '../styles/CollectionFeatured.scss'
import collection1 from '../public/collection-1.png'
import collection2 from '../public/collection-2.png'
import collection3 from '../public/collection-3.png'

function CollectionFeatured() {
    return (
        <div>


            <div >
                <h2 id='texto'>
                    Coleções em destaque
                </h2>
            </div>
            <div className='colecao'>

                <div>
                    <img src={collection1} className='imgcolecao'>

                    </img>
                    <div className='infos'>
                        <p className='porcentagem'>
                            30% OFF
                        </p>
                        <br />
                        <button className='botao'>
                            Comprar
                        </button>
                    </div>


                </div>


                <div>
                    <img src={collection2} className='imgcolecao'></img>
                    <div className='infos'>
                        <p className='porcentagem'>
                            30% OFF
                        </p>
                        <br />
                        <button className='botao'>
                            Comprar
                        </button>
                    </div>
                </div>

                <div>
                    <img src={collection3} className='imgcolecao'>
                    </img>
                    <div className='infos'>
                        <p className='porcentagem'>
                            30% OFF
                        </p>
                        <br />
                        <button className='botao'>
                            Comprar
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CollectionFeatured
