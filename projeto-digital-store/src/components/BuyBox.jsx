import React from 'react'
import nota from '../public/nota.png';
import stars from '../public/Stars.png';
import '../styles/BuyBox.scss';

function BuyBox() {
  return (
    <div className='buybox'>
      <ul className='lista'>
        <li>
          <p className='buybox-titulo'>
            Tênis Nike Revolution <br></br>
            6 Next Nature Masculino
          </p>
        </li>
        <li>
          <p className=' buybox-referencia'>
            Casual | Nike | REF:38416711
          </p>
        </li>
        <li className='buybox-item3'>
          <img src={stars}></img>
          <img src={nota}></img>
          <p className='buybox-avaliacoes'>(90 avaliações)</p>
        </li>
        <li className='buybox-item4'>
          <p className='buybox-cifrao'>
            R$
          </p>
          <p className='buybox-preco-grande'>
            219,
          </p>
          <p className='buybox-preco-grande-zeros'>
            00
          </p>
          <p className='buybox-preco-tracado'>
            219,00
          </p>
        </li>
        <li className='buybox-item5'>
          Descrição do produto
        </li>
        <li className='buybox-item6'>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do
            eiusmod tempor incididunt
            utlabore et dolore magna aliqua.
            Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </li>
        <li className='buybox-item7'>
          <label>
            <p className='buybox-tamanhos'>
                 Tamanhos
            </p>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="tamanho" value="1" />
                <span className="custom-radio">38</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="tamanho" value="2" />
                <span className="custom-radio">39</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="tamanho" value="3" />
                <span className="custom-radio">40</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="tamanho" value="4" />
                <span className="custom-radio">41</span>
              </label>
            </div>
          </label>
        </li>
        <li className='buybox-item8'>
          <button className='buybox-button'>COMPRAR</button>
        </li>
      </ul>
    </div>
  )
}

export default BuyBox
